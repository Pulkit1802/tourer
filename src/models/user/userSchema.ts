import {Schema} from "mongoose";
import {UserInterface} from "./userInterface";

export const userSchema = new Schema<UserInterface>({
    name: {
        type: String,
        required: [true, 'User name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is needed'],
    },
    location: {
        lat: {
            type: Number,
            default: 0,
        },
        long: {
            type: Number,
            default: 0,
        }
    },
    createdOn: Date,
    password: {
        type: String,
        required: [true, 'Password is required for user to exist'],
    },
});
