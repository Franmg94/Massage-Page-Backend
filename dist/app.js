"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// ℹ️ Connects to the database
require("./db/index");
// Handles HTTP requests (express is node js framework)
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const appointments_routes_1 = __importDefault(require("./routes/appointments.routes"));
const message_routes_1 = __importDefault(require("./routes/message.routes"));
const app = (0, express_1.default)();
// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
const index_1 = __importDefault(require("./config/index"));
(0, index_1.default)(app);
// 👇 Apply body-parser middleware
app.use((0, body_parser_1.json)());
// 👇 Start handling routes here
app.use('/auth', auth_routes_1.default);
app.use('/appointments', appointments_routes_1.default);
app.use('/messages', message_routes_1.default);
// Error handling middleware
const index_2 = __importDefault(require("./error-handling/index"));
(0, index_2.default)(app);
exports.default = app;
