import {User} from "../models/userModels/userSchema";
import {UserInterface} from "../models/userModels/userInterface";
import logger from "../utils/logger";
import {createQuery} from "./queryCreator";
import {paginate} from "./pagination";


const findAllUsers = async (filter: any): Promise<UserInterface[]> => {
    try {

        let query = createQuery(filter);

        let user = User.find(query);

        if (filter.sort)
            user.sort(filter.sort);

        if (filter.page && filter.limit)
            user = paginate(filter.page, filter.limit, user);

        return await user
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
