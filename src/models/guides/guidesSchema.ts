import {Schema, model} from "mongoose";
import {IGuides} from "./guidesInterface";

const guidesSchema = new Schema<IGuides>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    coords: {
        type: [Number],
        default: [0, 0],
    }
});
