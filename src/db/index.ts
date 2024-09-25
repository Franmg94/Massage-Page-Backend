import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// Ensure MONGODB_URI environment variable is set
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

const MONGODB_URI: string = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then((connection) => {
    const dbName: string = connection.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err: Error) => {
    console.error("Error connecting to mongo: ", err);
  });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
