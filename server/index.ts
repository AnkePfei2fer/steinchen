import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDatabase, getUserCollection } from "./utils/database";
import fetch from "node-fetch";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI dotenv variable.");
}

app.get("/api/hello", (_request, response) => {
  response.json({ message: "Hello from server" });
});

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
  console.log({ query });
  // If query conatins no "-" add "-1" per default
  let set_num;
  if (query.match(/-1/)) {
    set_num = query;
  } else {
    set_num = `${query}-1`;
  }
  console.log({ set_num });

  const setResponse = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${set_num}/?key=${process.env.API_KEY}`
  );
  if (!setResponse.ok) {
    res.status(setResponse.status).send();
    return;
  }
  const set = await setResponse.json();
  const themeId = set.theme_id;
  const themeResponse = await fetch(
    `https://rebrickable.com/api/v3/lego/themes/${themeId}/?key=${process.env.API_KEY}`
  );
  if (!themeResponse.ok) {
    res.status(themeResponse.status).send();
    return;
  }
  const theme = await themeResponse.json();
  const combinedSet = {
    numberSet: set.set_num,
    nameSet: set.name,
    year: set.year,
    numberParts: set.num_parts,
    imageUrl: set.set_img_url,
    nameTheme: theme.name,
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
  response.send("Updated");
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
  }
  {
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
