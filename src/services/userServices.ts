import {User} from "../models/userModels/userSchema";
import {UserInterface} from "../models/userModels/userInterface";
import logger from "../utils/logger";

const findAllUsers = async (filter:Object = {}): Promise<UserInterface[]> => {
    try {
        return await User.find(filter, {password: 0});
    } catch (e) {
        logger.error(e);
        return [];
    }
}

const findUserById = async (id:string): Promise<UserInterface | null> => {
    try {
        return await User.findById(id, {password: 0});
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const createNewUser = async (user: UserInterface): Promise<UserInterface | null> => {
    try {
        return await User.create(user);
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const deleteUserByID = async (id: string): Promise<UserInterface | null> => {
    try {
        return await User.findByIdAndDelete(id, {password: 0});
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const modifyUser = async (id: string, user: {}): Promise<UserInterface | null> => {
    try {
        await User.findByIdAndUpdate(id, user, {password: 0});
        return await User.findById(id, {password: 0});
    } catch (e) {
        logger.error(e);
        return null;
    }
}

export {
    findAllUsers,
    findUserById,
    createNewUser,
    deleteUserByID,
    modifyUser
}
