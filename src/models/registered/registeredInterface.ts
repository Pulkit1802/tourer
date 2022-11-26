import {Schema} from "mongoose";

export interface IRegistered {
    tour: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    startDate: Date;
    guide: string;
}