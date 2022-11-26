import {userController, tourController, tourRegistrationController} from "../controllers";
import {createRouter} from "./Router";

const tourRouter = createRouter(tourController);
const userRouter = createRouter(userController);
const tourRegistrationRouter = createRouter(tourRegistrationController);

export {
    tourRouter,
    userRouter,
    tourRegistrationRouter
}
