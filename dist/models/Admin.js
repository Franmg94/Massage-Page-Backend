"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true
});
const Admin = (0, mongoose_1.model)("Admin", adminSchema);
exports.default = Admin;
