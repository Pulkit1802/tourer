import {Request, Response} from "express";

export interface IControllers {
    getAll(req:Request, res: Response): Promise<void>;
}