import {Response} from "express";

export const sendResponse = (res: Response, status: number, data: Object, message: string) => {
    res.status(status).json({
        data,
        message
    })
}
