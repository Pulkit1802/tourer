import {Request, Response} from "express";
import {UserInterface} from "../models/userModels/userInterface";
import {ITours} from "../models/tours/toursInterface";
import {sendResponse} from "../utils/response";
import logger from "../utils/logger";
import {Services} from "../services/serviceClass";
import {IControllers} from "./controllerInterface";

type serviceTypes = ITours | UserInterface;
type serviceTypesNull = serviceTypes | null;

export class Controller implements IControllers{
    service: Services;

    constructor(service:Services) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
    }

     async getAll(req:Request, res:Response): Promise<void> {

        try {
            const result: serviceTypes[] = await this.service.getAll(req.query);
            if (result.length)
                sendResponse(res, 200, result, "Found");
            else
                sendResponse(res, 404, {}, "Couldn't find resources")

        } catch (e) {
            logger.error(e);
            sendResponse(res, 500, {}, "Server Error")
        }
    }

}