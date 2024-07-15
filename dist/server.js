"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const PORT = parseInt(process.env.PORT || "5005", 10);
app_1.default.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
