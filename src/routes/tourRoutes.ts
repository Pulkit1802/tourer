import {Router} from "express";
import {tourController} from "../controllers";

const router = Router();

router
    .route('/')
    .get(tourController.getAll)
    .post(tourController.create);

router
    .route('/:id')
    .get(tourController.getOne)
    .delete(tourController.delete)
    .patch(tourController.modify);

export {
    router as tourRouter
}