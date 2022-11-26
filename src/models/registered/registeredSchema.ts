import {Schema} from 'mongoose';
import {IRegistered} from "./registeredInterface";

export const registeredSchema = new Schema<IRegistered>({
    tour: {
        type: Schema.Types.ObjectId,
        ref: 'tours',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    guide: {
        type: String,
    }
});
