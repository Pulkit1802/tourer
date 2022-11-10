import {Request, Response} from "express";
import {UserInterface} from "../models/userModels/userInterface";
import {findAllUsers, findUserById, createNewUser, deleteUserByID} from "../services/userServices";
import {sendResponse} from "../utils/response";
import logger from "../utils/logger";

const getAllUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        const users: UserInterface[] = await findAllUsers();

        if (users.length)
            sendResponse(res, 200, users, 'All Users');
        else
            sendResponse(res, 200, [], 'No Users Found');

    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, [], 'Some error occurred on Server Side');
    }
}

const getSingleUser = async (req: Request, res: Response):Promise<void> => {
    try {
        const user: UserInterface | null = await findUserById(req.params.id);

        if (user)
            sendResponse(res, 200, user, 'User Found');
        else
            sendResponse(res, 404, [], 'No such user exist');


    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, [], 'Some error occurred on Server Side');
    }
}

const createUser = async (req: Request, res: Response):Promise<void> => {
    try {
        const newUser: UserInterface | null = await createNewUser(req.body);

        if (newUser) {
            delete newUser.password;
            sendResponse(res, 201, newUser, 'User Created');
        }
        else
            sendResponse(res, 409, [], 'Could not create user');


    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, [], 'Some error occurred on Server Side');
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const user: UserInterface | null = await deleteUserByID(req.params.id);

        if (user)
            sendResponse(res, 200, user, 'User Deleted');
        else
            sendResponse(res, 404, [], 'No such user exist');

    } catch (e) {
        logger.error(e);
        sendResponse(res, 500, [], 'Some error occurred on Server Side');
    }
}

export {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser
}

