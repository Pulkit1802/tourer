import {ITours} from "../models/tours/toursInterface";
import {UserInterface} from "../models/userModels/userInterface";
import {Query} from "mongoose";

export const paginate = (pageNo:number, limit:number, module:Query<any, any>) => {
    const skip = (pageNo - 1) * limit;
    return module.skip(skip).limit(limit);
}