import {Request, Response} from "express";
import {ITours} from "../models/tours/toursInterface";
import {findAllTours, findTourById, createNewTour, deleteTourByID, modifyTour
} from "../services/tourServices";
import {sendResponse} from "../utils/response";
import logger from "../utils/logger";

const getAllTours = async (req: Request, res: Response):Promise<void> => {
    try {
        const tours: ITours[] = await findAllTours();

        if (tours.length)
            sendResponse(res, 200, {tours}, 'All Tours');
        else
            sendResponse(res, 200, {}, 'No Tours Found');

    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, {}, 'Some error occurred on Server Side');
    }
}

const getSingleTour = async (req: Request, res: Response):Promise<void> => {
    try {
        const tour: ITours | null = await findTourById(req.params.id);

        if (tour)
            sendResponse(res, 200, {tour}, 'Tour Found');
        else
            sendResponse(res, 404, {}, 'No such tour exist');
    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, {}, 'Some error occurred on Server Side');
    }
}

const createTour = async (req: Request, res: Response):Promise<void> => {
    try {
        const newTour: ITours | null = await createNewTour(req.body);

        if (newTour) {
            sendResponse(res, 201, {newTour}, 'Tour Created');
        }
        else
            sendResponse(res, 409, {}, 'Could not create tour');
    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, {}, 'Some error occurred on Server Side');
    }
}

const deleteTour = async (req: Request, res: Response) => {
    try {
        const tour: ITours | null = await deleteTourByID(req.params.id);

        if (tour)
            sendResponse(res, 200, {tour}, 'Tour Deleted');
        else
            sendResponse(res, 404, {}, 'No such tour exist');
    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, {}, 'Some error occurred on Server Side');
    }
}

const modifyTourController = async (req: Request, res: Response) => {
    try {
        const tour: ITours | null = await modifyTour(req.params.id, req.body);

        if (tour)
            sendResponse(res, 200, {tour}, 'Tour Modified');
        else
            sendResponse(res, 404, {}, 'No such tour exist');
    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, {}, 'Some error occurred on Server Side');
    }
}

export {getAllTours, getSingleTour, createTour, deleteTour, modifyTourController};