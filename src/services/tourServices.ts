import {Tour} from "../models/tours/tourSchema";
import {ITours} from "../models/tours/toursInterface";
import logger from "../utils/logger";

const findAllTours = async (filter:Object = {}): Promise<ITours[]> => {
    try {
        return await Tour.find(filter);
    } catch (e) {
        logger.error(e);
        return [];
    }
}

const findTourById = async (id:string): Promise<ITours | null> => {
    try {
        return await Tour.findById(id);
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const createNewTour = async (tour: ITours): Promise<ITours | null> => {
    try {
        return await Tour.create(tour);
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const deleteTourByID = async (id: string): Promise<ITours | null> => {
    try {
        return await Tour.findByIdAndDelete(id);
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const modifyTour = async (id: string, tour: {}): Promise<ITours | null> => {
    try {
        await Tour.findByIdAndUpdate(id, tour);
        return await Tour.findById(id);
    } catch (e) {
        logger.error(e);
        return null;
    }
}

//Export all functions
export {
    findAllTours,
    findTourById,
    createNewTour,
    deleteTourByID,
    modifyTour
}