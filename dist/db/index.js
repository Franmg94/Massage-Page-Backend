"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import mongoose with type definitions
const mongoose_1 = __importDefault(require("mongoose"));
// Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
const MONGO_URI = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/massage-api";
mongoose_1.default
    .connect(MONGO_URI)
    .then((connection) => {
    const dbName = connection.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
})
    .catch((err) => {
    console.error("Error connecting to mongo: ", err);
});
