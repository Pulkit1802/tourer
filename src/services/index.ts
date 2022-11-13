import {Services} from "./serviceClass";
import {Tour} from "../models/tours/tourSchema";
import {User} from "../models/user/userSchema";

const tourServices:Services = new Services(Tour);
const userServices:Services = new Services(User);

export {
    tourServices,
    userServices
}