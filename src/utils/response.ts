import {Response} from "express";

export const sendResponse = (res: Response, status: number, data: {}|{}[], message: string) => {
    res.status(status).json({
        ...data,
        message
    });
}
