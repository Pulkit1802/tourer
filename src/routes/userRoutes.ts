import {Router} from "express";
import {userController} from "../controllers";

const router = Router();

router
    .route('/')
    .get(userController.getAll)
    .post(userController.create);

router
    .route('/:id')
    .get(userController.getOne)
    .delete(userController.delete)
    .patch(userController.modify);

export {
    router as userRouter
}
