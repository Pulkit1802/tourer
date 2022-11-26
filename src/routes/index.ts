import {userController, tourController, tourRegistationController} from "../controllers";
import {RouterClass} from "./routeClass";

const tourRouter = new RouterClass(tourController).createRouter();
const userRouter = new RouterClass(userController).createRouter();
const tourRegistrationRouter = new RouterClass(tourRegistationController).createRouter();

export {
    tourRouter,
    userRouter,
    tourRegistrationRouter
}
