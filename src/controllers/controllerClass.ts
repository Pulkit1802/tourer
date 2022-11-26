import {Request, Response} from "express";
import {serviceTypes, serviceTypeNull} from "../services/serviceType";
import {sendResponse} from "../utils/response";
import logger from "../utils/logger";
import {Services} from "../services/serviceClass";
import {IControllers} from "./controllerInterface";

export class Controller implements IControllers{
    service: Services;

    constructor(service:Services) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.delete = this.getOne.bind(this);
        this.modify = this.getOne.bind(this);
        this.create = this.getOne.bind(this);
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

    async create(req: Request, res: Response): Promise<void> {
        try {
            const result: serviceTypeNull = await this.service.create(req.body);
            if (result)
                sendResponse(res, 201, {result}, 'Created');
            else
                sendResponse(res, 402, {}, 'Failed to create');
        } catch (e) {
            logger.error(e);
            sendResponse(res, 500, {}, 'Server Error')
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const result: number = await this.service.delete(req.params.id);
            if (result===1)
                sendResponse(res, 202, {result}, 'Deleted Successfully');
            else if (result===0)
                sendResponse(res, 402, {}, 'No entry with id found');
            else
                sendResponse(res, 500, {}, 'Server Error');

        } catch (e) {
            logger.error(e);
            sendResponse(res, 500, {}, 'Server Error')
        }
    }

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const result: serviceTypeNull = await this.service.getOne(req.params.id);
            if (result)
                sendResponse(res, 202, {result}, '');
            else
                sendResponse(res, 500, {}, 'Server Entry with this id');

        } catch (e) {
            logger.error(e);
            sendResponse(res, 500, {}, 'Server Error')
        }
    }

    async modify(req: Request, res: Response): Promise<void> {
        try {
            const result: serviceTypeNull = await this.service.modify(req.params.id, req.body);
            if (result)
                sendResponse(res, 202, {result}, '');
            else
                sendResponse(res, 500, {}, 'Server Entry with this id');

        } catch (e) {
            logger.error(e);
            sendResponse(res, 500, {}, 'Server Error')
        }
    }

}