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

// PATCH a new set to a user
app.patch("/api/users/:username", async (request, response) => {
  const userCollection = getUserCollection();
  const username = request.params.username;
  const newSet = request.body;
  await userCollection.updateOne(
    { name: username },
    { $addToSet: { sets: { $each: newSet } } }
  ),
    response.send("Updated");
});

// Send request to Rebrickable API with set number specified by client
app.get("/api/sets/search_by_set_number/:set_num", async (req, res) => {
  const { set_num } = req.params;
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${set_num}/?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  res.send(data);
});

// Send request to Rebrickable API with theme id
app.get("/api/theme/search_by_theme_id/:theme_id", async (req, res) => {
  const { theme_id } = req.params;
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/themes/${theme_id}/?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  res.send(data);
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
