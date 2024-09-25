import dotenv from "dotenv";

("use strict");
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Ensure MONGODB_URI environment variable is set
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}
const MONGODB_URI = process.env.MONGODB_URI;
mongoose_1.default
  .connect(MONGODB_URI)
  .then((connection) => {
    const dbName = connection.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
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
