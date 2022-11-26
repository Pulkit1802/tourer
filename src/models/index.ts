import {model} from "mongoose";
import {userSchema} from "./user/userSchema";
import {registeredSchema} from "./registered/registeredSchema";
import {tourSchema} from "./tours/tourSchema";

const User = model('users', userSchema);
const RegisteredTours = model('registered', registeredSchema);
const Tour = model('tours', tourSchema);

export {
    User,
    Tour,
    RegisteredTours
}
