import {Schema} from "mongoose";

export interface IRegistered {
    tour: string;
    user: string;
    startDate: Date;
    guide: string;
}