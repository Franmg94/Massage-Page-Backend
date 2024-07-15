import { Schema, model, Document } from "mongoose";

// Define Enums
enum Service {
  Wellness = "Wellness",
  DeepTissue = "Deep Tissue",
  EnergyWork = "Energy Work",
  Holistic = "Holistic",
  USC = "Urban Sports Club",
  ClassPass = "Class Pass"
}


enum Location {
  CentroDelfino = "Centro Delfino",
  MasseursAddress = "Weigandufer 26",
  ClientAddress = "Client Address",
  Neukoln = "Neuköln" 
}

// Define Client Interface
interface Client {
  name: string;
  email: string;
  phone: string;
  address?: string;
  uscNumber?: number | null;
}

// Define Appointment Interface extending Mongoose Document
interface Appointment extends Document {
  service: Service;
  date: Date;
  time: string;
  location: Location;
  client: Client;
  duration: number; 
}

// Define Appointment Schema
const appointmentSchema = new Schema<Appointment>(
  {
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
        validator: function (v: number) {
          return [30, 45, 60, 90].includes(v);
        },
        message: (props) =>
          `${props.value} is not a valid duration! It should be 30, 45, 60, or 90 minutes.`,
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
          validator: function (v: string) {
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
          validator: function (v: number) {
            return v === undefined || v === null || /^\d{9}$/.test(v.toString());
          },
          message: (props) =>
            `${props.value} is not a valid 9-digit USC Number!`,
        },
      },
      
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

appointmentSchema.index({ "client.email": 1 });

const AppointmentModel = model<Appointment>("Appointment", appointmentSchema);

export default AppointmentModel;
