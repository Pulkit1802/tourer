import {Router, Request, Response} from "express";

const router = Router();

router
    .route('/')
    .get((req:Request, res: Response) => {
        res.send("Success");
    });


router
    .route('/:id');

export {
    router as userRouter
}
