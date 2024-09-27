"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// Render dynamically assigns a port, so we should always use process.env.PORT
const PORT = parseInt(process.env.PORT || "5005");
app_1.default.listen(PORT, () => {
    const env = process.env.NODE_ENV || "development";
    const url = env === "development"
        ? `http://localhost:${PORT}`
        : `Render Deployment URL`;
    console.log(`Server is running on ${url}`);
});
