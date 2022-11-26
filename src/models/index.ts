import {model} from "mongoose";
import {userSchema} from "./user/userSchema";
import {registeredSchema} from "./registered/registeredSchema";
import {tourSchema} from "./tours/tourSchema";
//
// let User, Tour, RegisteredTours;
//
// function createModels() {
//     User = model('users', userSchema)
// }

const User = model('users', userSchema);
const Tour = model('tours', tourSchema);
const RegisteredTours = model('registered', registeredSchema);

export {
    User,
    Tour,
    RegisteredTours
}
