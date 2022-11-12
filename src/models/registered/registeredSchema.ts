import {Schema, model} from 'mongoose';
import {IRegistered} from "./registeredInterface";

const registeredSchema = new Schema<IRegistered>({
    tour: {
        type: String,
        ref: 'Tour',
        required: true
    },
    user: {
        type: String,
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

const registeredTours = model('registered', registeredSchema);

export default registeredTours;