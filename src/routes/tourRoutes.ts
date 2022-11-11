import {Router} from "express";
import {createTour, deleteTour, getAllTours, getSingleTour, updateTour} from "../controllers/tourControllers";

const router = Router();

router
    .route('/')
    .get(getAllTours)
    .post(createTour);

router
    .route('/:id')
    .get(getSingleTour)
    .delete(deleteTour)
    .patch(updateTour);

export {
    router as tourRouter
}