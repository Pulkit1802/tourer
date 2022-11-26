import {Schema, model} from "mongoose";
import {ITours} from "./toursInterface";

export const tourSchema = new Schema<ITours>({
    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true,
    },
    duration: {
        type: Number,
        required: [true, "A tour must have a duration"],
    },
    maxGroupSize: {
        type: Number,
        required: [true, "A tour must have a max group size"],
    },
    activities: {
        type: [String],
        required: [true, "A tour must have activities"],
    },

    startLocation: {
        type: {
            name: String,
            coordinates: [Number],
            address: String,
        },
        required: [true, "A tour must have a start location"],
    },

    tripLocations: {
        type: [
            {
                name: String,
                coordinates: [Number],
                day: Number,
                address: String,
            },
        ],
    },

    price: {
        type: Number,
        required: [true, "A tour must have a price"],
        default: 0,
    },

    startDates: {
        type: [Date],
        required: [true, "A tour must have start dates"],
    },

    description: {
        type: String,
        required: [true, "A tour must have a description"],
    },
    summary: {
        type: String,
        required: [true, "A tour must have a summary"],
    },
    imageCover: {
        type: String,
        required: [true, "A tour must have a cover image"],
    },
    images: {
        type: [String],
        required: [true, "A tour must have images"],
    },
    ratingsAverage: {
        type: Number,
    },
    ratingsQuantity: {
        type: Number,
    },
    guides: {
        type: [String],
        required: [true, "A tour must have guides"],
    },
});
