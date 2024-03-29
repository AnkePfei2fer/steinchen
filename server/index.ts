import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDatabase, getUserCollection } from "./utils/database";
import { Part, Moc, Minifig } from "../types";
import fetch from "node-fetch";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI dotenv variable.");
}

// Serve production bundle
app.use(express.static("dist"));

// Middleware for parsing application/json (strings of the json object is converted into JS)
app.use(express.json());

// Display all users from MongoDB
app.get("/api/users", async (_request, response) => {
  const userCollection = getUserCollection();
  const users = userCollection.find();
  const allUsers = await users.toArray();
  response.send(allUsers);
});

// Display one specific user from MongoDB
app.get("/api/users/:name", async (request, response) => {
  const userCollection = getUserCollection();
  const user = request.params.name;
  const isUserKnown = await userCollection.findOne({
    name: user,
  });
  if (isUserKnown) {
    response.status(200).send(isUserKnown);
  } else {
    response.status(404).send("user unknown");
  }
});

// POST a new user to MongoDB
app.post("/api/users", async (request, response) => {
  const userCollection = getUserCollection();
  const newUser = request.body;

  const isUserKnown = await userCollection.findOne({
    name: newUser.name,
  });
  if (isUserKnown) {
    response
      .status(409)
      .send(`There is already someone called ${newUser.name}`);
  } else {
    userCollection.insertOne(newUser);
    response.send(`${newUser.name} was added`);
  }
});

// Send request to Rebrickable API with set number specified by client
app.get("/api/sets/:query", async (req, res) => {
  const { query } = req.params;

  // If query contains no "-1" add "-1" per default
  let set_num;
  if (query.match(/-1/)) {
    set_num = query;
  } else {
    set_num = `${query}-1`;
  }

  // Fetch set information
  const setResponse = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${set_num}/?key=${process.env.API_KEY}`
  );
  if (!setResponse.ok) {
    res.status(setResponse.status).send();
    return;
  }
  const set = await setResponse.json();

  // Fetch theme information
  const themeId = set.theme_id;
  const themeResponse = await fetch(
    `https://rebrickable.com/api/v3/lego/themes/${themeId}/?key=${process.env.API_KEY}`
  );
  if (!themeResponse.ok) {
    res.status(themeResponse.status).send();
    return;
  }
  const theme = await themeResponse.json();

  // Fetch part information (first 1000 unique parts)
  const partsResponse = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${set_num}/parts/?page_size=1000&key=${process.env.API_KEY}`
  );
  if (!partsResponse.ok) {
    res.status(partsResponse.status).send();
    return;
  }
  let parts = await partsResponse.json();
  const partsResults = parts.results;
  console.log(partsResults.length);

  // Load one further page if necessary
  const nextPage = parts.next;

  if (nextPage) {
    const nextResponse = await fetch(`${nextPage}&key=${process.env.API_KEY}`);
    if (!nextResponse.ok) {
      res.status(nextResponse.status).send();
      return;
    }
    const nextParts = await nextResponse.json();
    const nextPartsResults = nextParts.results;

    Array.prototype.push.apply(partsResults, nextPartsResults);
    console.log(nextPartsResults.length);
    console.log(partsResults.length);
    parts = partsResults;
  }

  // Extract part quantity, spare information and unique ID
  const partsQuantityAndSpareAndID = parts.results.map((parts: Part) => {
    return {
      quantity: parts.quantity,
      sparePart: parts.is_spare,
      partID: parts.element_id,
    };
  });

  // Extract part number and image url
  const partsInformation = parts.results.map((parts: Part) => {
    return parts.part;
  });

  const partsNumberAndImage = partsInformation.map((parts: Part) => {
    {
      return { numberPart: parts.part_num, imageUrlPart: parts.part_img_url };
    }
  });

  // Extract part color
  const partsColor = parts.results.map((parts: Part) => {
    return parts.color;
  });

  const partsColorID = partsColor.map((parts: Part) => {
    {
      return { colorID: parts.id };
    }
  });

  const partsDetails = partsQuantityAndSpareAndID.map(function (
    e: number,
    i: number
  ) {
    return Object.assign(e, partsNumberAndImage[i], partsColorID[i]);
  });

  // Fetch MOC information
  const mocResponse = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${set_num}/alternates/?key=${process.env.API_KEY}`
  );
  if (!mocResponse.ok) {
    res.status(mocResponse.status).send();
    return;
  }
  const moc = await mocResponse.json();

  // Extract MOC number, name, parts number, image url and url
  const mocInformation = moc.results.map((moc: Moc) => {
    return {
      numberMoc: moc.set_num,
      nameMoc: moc.name,
      numberPartsMoc: moc.num_parts,
      imageUrlMoc: moc.moc_img_url,
      urlMoc: moc.moc_url,
    };
  });

  // Fetch minifig information
  const minifigResponse = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${set_num}/minifigs/?key=${process.env.API_KEY}`
  );
  if (!minifigResponse.ok) {
    res.status(minifigResponse.status).send();
    return;
  }
  const minifig = await minifigResponse.json();

  // Extract minifig id, name, parts number, image url and quantity
  const minifigInformation = minifig.results.map((minifig: Minifig) => {
    return {
      minifigID: minifig.id,
      nameMinifig: minifig.set_name,
      quantity: minifig.quantity,
      imageUrlMinifig: minifig.set_img_url,
    };
  });

  //  Send all information to frontend
  const combinedSet = {
    numberSet: set.set_num,
    nameSet: set.name,
    year: set.year,
    numberPartsSet: set.num_parts,
    imageUrlSet: set.set_img_url,
    nameTheme: theme.name,
    partsInventory: partsDetails,
    minifigInformation: minifigInformation,
    mocInformation: mocInformation,
  };
  res.send(combinedSet);
});

// PATCH a new set to a user set collection
app.patch("/api/users/:username", async (request, response) => {
  const userCollection = getUserCollection();
  const username = request.params.username;
  const newSet = request.body;
  const added = await userCollection.updateOne(
    { name: username },
    { $addToSet: { sets: newSet } }
  );
  if (added.matchedCount === 0) {
    response.status(404).send("User not found");
    return;
  }
  response.send("User collection was updated.");
});

// Delete set from user set collection
app.delete("/api/users/:username/sets/:id", async (request, response) => {
  const userCollection = getUserCollection();
  const { username, id } = request.params;
  const removeSet = await userCollection.updateOne(
    { name: username },
    { $pull: { sets: { numberSet: id } } }
  );
  if (removeSet.modifiedCount === 1) {
    response.send("The set was removed from collection.");
  } else {
    response.status(404).send("Set or user not found");
  }
});

// Handle client routing, return all requests to the app
app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Connect to MongoDB (password is encoded in dotenv)
connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
