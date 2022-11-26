import {Router} from "express";
import {Controller} from "../controllers/controllerClass";

export class RouterClass {
    router: Router;
    controller: Controller;

    constructor(controller: Controller) {
        this.router = Router();
        this.controller = controller;

        this.router
            .route('/')
            .get(this.controller.getAll)
            .post(this.controller.create);

        this.router
            .route('/:id')
            .get(this.controller.getOne)
            .patch(this.controller.modify)
            .delete(this.controller.delete);

        this.createRouter = this.createRouter.bind(this);
    }

    createRouter = (): Router => this.router;

}