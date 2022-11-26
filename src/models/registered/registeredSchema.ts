import {Schema, model} from 'mongoose';
import {IRegistered} from "./registeredInterface";

export const registeredSchema = new Schema<IRegistered>({
    tour: {
        type: Schema.Types.ObjectId,
        ref: 'Tour',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    guide: {
        type: String,
    }
});
