// import {ITours} from "../models/tours/toursInterface";
// import {Tour} from "../models/tours/tourSchema";
// import {createQuery} from "./queryCreator";
// import logger from "../utils/logger";
// import {paginate} from "./pagination";
//
// const findAllTours = async (filter:any): Promise<ITours[]> => {
//     try {
//
//         let query = createQuery(filter);
//
//         let tour = Tour.find(query);
//
//         if(filter.sort)
//             tour.sort(filter.sort);
//
//         if(filter.page && filter.limit)
//             tour = paginate(filter.page, filter.limit, tour);
//
//         return await tour;
//
//     } catch (e) {
//         logger.error(e);
//         return [];
//     }
// }
//
// const findTourById = async (id:string): Promise<ITours | null> => {
//     try {
//         return await Tour.findById(id);
//     } catch (e) {
//         logger.error(e);
//         return null;
//     }
// }
//
// const createNewTour = async (tour: ITours): Promise<ITours | null> => {
//     try {
//         return await Tour.create(tour);
//     } catch (e) {
//         logger.error(e);
//         return null;
//     }
// }
//
// const deleteTourByID = async (id: string): Promise<ITours | null> => {
//     try {
//         return await Tour.findByIdAndDelete(id);
//     } catch (e) {
//         logger.error(e);
//         return null;
//     }
// }
//
// const modifyTour = async (id: string, tour: {}): Promise<ITours | null> => {
//     try {
//         await Tour.findByIdAndUpdate(id, tour);
//         return await Tour.findById(id);
//     } catch (e) {
//         logger.error(e);
//         return null;
//     }
// }
//
// //Export all functions
// export {
//     findAllTours,
//     findTourById,
//     createNewTour,
//     deleteTourByID,
//     modifyTour
// }
//


import {Services} from "./serviceClass";
import {Tour} from "../models/tours/tourSchema";

const tourServices = new Services(Tour);

export {
    tourServices
}
