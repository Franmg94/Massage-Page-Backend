import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// Ensure DATABASE_URL environment variable is set
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

const MONGO_URI: string = process.env.DATABASE_URL;

mongoose
  .connect(MONGO_URI)
  .then((connection) => {
    const dbName: string = connection.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err: Error) => {
    console.error('Error connecting to mongo: ', err);
  });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
