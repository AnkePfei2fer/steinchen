import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDatabase, getUserCollection } from "./utils/database";
import fetch from "node-fetch";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

// Allows access to the server from anywhere
app.use(cors({ origin: "*" }));

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI dotenv variable.");
}

app.get("/api/hello", (_request, response) => {
  response.json({ message: "Hello from server" });
});

// Serve production bundle
app.use(express.static("dist"));

// Display all users in MongoDB
app.get("/api/users", async (_request, response) => {
  const userCollection = getUserCollection();
  const users = userCollection.find();
  const allUsers = await users.toArray();
  response.send(allUsers);
});

// Manual setting of the search query
const set_num = "11001-1";

// Send request to Rebrickable API with set number specified
app.get("/api/sets/search_by_set_number", async (_req, res) => {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${set_num}/?key=${process.env.API_KEY}`
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
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
