import {Request, Response} from "express";
import {UserInterface} from "../models/userModels/userInterface";
import {findAllUsers, findUserById, createNewUser, deleteUserByID} from "../services/userServices";
import logger from "../utils/logger";

const getAllUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        const users: UserInterface[] = await findAllUsers();

        if (users.length)
            res.status(200).json({
                users: users,
            });
        else {
            res.status(200).json({
                message: 'No user exist as of now',
            })
        }

    } catch (e) {
        logger.error(e);
        res.status(404).json({
            message: 'Some error occurred on Server Side',
        })
    }
}

const getSingleUser = async (req: Request, res: Response):Promise<void> => {
    try {
        const user: UserInterface | null = await findUserById(req.params.id);

        if (user)
            res.status(200).json({
                users: user,
            });
        else {
            res.status(200).json({
                message: 'No such user exist',
            })
        }

    } catch (e) {
        logger.error(e);
        res.status(404).json({
            message: 'Some error occurred on Server Side',
        })
    }
}

const createUser = async (req: Request, res: Response):Promise<void> => {
    try {
        const newUser: UserInterface | null = await createNewUser(req.body);

        if (newUser) {
            delete newUser.password;
            res.status(200).json({
                users: newUser,
            });
        }
        else {
            res.status(200).json({
                message: 'User with this mail already exist',
            })
        }

    } catch (e) {
        logger.error(e);
        res.status(404).json({
            message: 'Some error occurred on Server Side',
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const user: UserInterface | null = await deleteUserByID(req.params.id);

        if (user)
            res.status(200).json({
                users: user,
            });
        else {
            res.status(200).json({
                message: 'No such user exist',
            })
        }

    } catch (e) {
        logger.error(e);
        res.status(404).json({
            message: 'Some error occurred on Server Side',
        })
    }
}

export {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser
}

