/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Document } from "mongoose";
declare enum Service {
    Wellness = "Wellness",
    DeepTissue = "Deep Tissue",
    EnergyWork = "Energy Work",
    Holistic = "Holistic",
    USC = "Urban Sports Club",
    ClassPass = "Class Pass"
}
declare enum Location {
    CentroDelfino = "Centro Delfino",
    MasseursAddress = "Weigandufer 26",
    ClientAddress = "Client Address",
    Neukoln = "Neuk\u00F6ln"
}
interface Client {
    name: string;
    email: string;
    phone: string;
    address?: string;
    uscNumber?: number | null;
}
interface Appointment extends Document {
    service: Service;
    date: Date;
    time: string;
    location: Location;
    client: Client;
    duration: number;
}
declare const AppointmentModel: import("mongoose").Model<Appointment, {}, {}, {}, Document<unknown, {}, Appointment> & Appointment & Required<{
    _id: unknown;
}>, any>;
export default AppointmentModel;
//# sourceMappingURL=Appointment.d.ts.map