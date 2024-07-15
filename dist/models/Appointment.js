"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define Enums
var Service;
(function (Service) {
    Service["Wellness"] = "Wellness";
    Service["DeepTissue"] = "Deep Tissue";
    Service["EnergyWork"] = "Energy Work";
    Service["Holistic"] = "Holistic";
    Service["USC"] = "Urban Sports Club";
    Service["ClassPass"] = "Class Pass";
})(Service || (Service = {}));
var Location;
(function (Location) {
    Location["CentroDelfino"] = "Centro Delfino";
    Location["MasseursAddress"] = "Weigandufer 26";
    Location["ClientAddress"] = "Client Address";
    Location["Neukoln"] = "Neuk\u00F6ln";
})(Location || (Location = {}));
// Define Appointment Schema
const appointmentSchema = new mongoose_1.Schema({
    service: {
        type: String,
        enum: Object.values(Service),
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        enum: Object.values(Location),
        required: true,
    },
    duration: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return [30, 45, 60, 90].includes(v);
            },
            message: (props) => `${props.value} is not a valid duration! It should be 30, 45, 60, or 90 minutes.`,
        },
    },
    client: {
        name: {
            type: String,
            required: [true, "Name is required."],
        },
        email: {
            type: String,
            required: [true, "Email is required."],
            lowercase: true,
            trim: true,
            validate: {
                validator: function (v) {
                    return /\S+@\S+\.\S+/.test(v);
                },
                message: (props) => `${props.value} is not a valid email!`,
            },
        },
        phone: {
            type: String,
            required: [true, "Phone is required."],
        },
        address: {
            type: String,
            required: false,
        },
        uscNumber: {
            type: Number,
            required: false, // explicitly make it optional
            validate: {
                validator: function (v) {
                    return v === undefined || v === null || /^\d{9}$/.test(v.toString());
                },
                message: (props) => `${props.value} is not a valid 9-digit USC Number!`,
            },
        },
    },
}, {
    timestamps: true,
    versionKey: false,
});
appointmentSchema.index({ "client.email": 1 });
const AppointmentModel = (0, mongoose_1.model)("Appointment", appointmentSchema);
exports.default = AppointmentModel;
