import {Schema, model} from "mongoose";
import {ITours} from "./toursInterface";

const tourSchema = new Schema<ITours>({
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
        type: String,
        required: [true, "A tour must have a start location"],
    },
    startCords: {
        lat: {
            type: Number,
            default: 0,
        },
        long: {
            type: Number,
            default: 0,
        }
    },
    endLocation: {
        type: String,
        required: [true, "A tour must have an end location"],
    },
    endCords: {
        lat: {
            type: Number,
            default: 0,
        },
        long: {
            type: Number,
            default: 0,
        }
    },
    tripLocations: {
        type: [{
            date: Date,
            time: String,
            day: Number,
            place: String,
            coords: {
                lat: {
                    type: Number,
                },
                long: {
                    type: Number,
                },
            }
        }],
        required: false,
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
});

const Tour = model("tours", tourSchema);

export {
    Tour,
}
