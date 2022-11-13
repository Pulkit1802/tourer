import {Controller} from "./controllerClass";
import {tourServices, userServices} from "../services";

const tourController = new Controller(tourServices);
const userController = new Controller(userServices);

export {
    tourController,
    userController
}