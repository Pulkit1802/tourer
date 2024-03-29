import {Controller} from "./controllerClass";
import {tourServices, userServices, registeredServices} from "../services";

const tourController = new Controller(tourServices);
const userController = new Controller(userServices);
const tourRegistrationController = new Controller(registeredServices);

export {
    tourController,
    userController,
    tourRegistrationController
}