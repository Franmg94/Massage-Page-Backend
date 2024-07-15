// Import mongoose with type definitions
import mongoose from "mongoose";

// Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI: string = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/massage-api";

mongoose
  .connect(MONGO_URI)
  .then((connection) => {
    const dbName: string = connection.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err: Error) => {
    console.error("Error connecting to mongo: ", err);
  });
