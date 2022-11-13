import {Request, Response} from "express";

export interface IControllers {
    getAll(req: Request, res: Response): Promise<void>;
    getOne(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    modify(req: Request, res: Response): Promise<void>;
}