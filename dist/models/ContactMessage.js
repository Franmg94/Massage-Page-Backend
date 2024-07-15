"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactMessageSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true
});
const ContactMessageModel = (0, mongoose_1.model)('ContactMessage', contactMessageSchema);
exports.default = ContactMessageModel;
