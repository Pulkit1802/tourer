import {Router} from "express";
import {Controller} from "../controllers/controllerClass";


export const createRouter = (controller: Controller): Router => {
    const router = Router();

    router
        .route('/')
        .get(controller.getAll)
        .post(controller.create);

    router
        .route('/:id')
        .get(controller.getOne)
        .patch(controller.modify)
        .delete(controller.delete);

    return router
}