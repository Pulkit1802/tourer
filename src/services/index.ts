import {Services} from "./serviceClass";
import {Tour, User, RegisteredTours} from "../models";

const tourServices:Services = new Services(Tour);
const userServices:Services = new Services(User);
const registeredServices:Services = new Services(RegisteredTours, 'user', 'tour');

export {
    tourServices,
    userServices,
    registeredServices
}