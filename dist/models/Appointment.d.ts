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