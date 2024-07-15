import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Use the PORT environment variable or default to 3000
const port = process.env.PORT || 3000;

// Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
const MONGO_URI: string = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/massage-api";

mongoose
  .connect(MONGO_URI)
  .then((connection) => {
    const dbName: string = connection.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err: Error) => {
    console.error("Error connecting to mongo: ", err);
  });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
