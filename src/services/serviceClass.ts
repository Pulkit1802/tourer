import {Model} from "mongoose";
import logger from "../utils/logger";
import {createQuery} from "./queries/queryCreator";
import {paginate} from "./queries/pagination";
import {UserInterface} from "../models/user/userInterface";
import {ITours} from "../models/tours/toursInterface";
import {IServices} from "./IServices";

type serviceTypes = ITours | UserInterface;
type serviceTypeList = ITours[] | UserInterface[];
type serviceTypeNull = serviceTypes | null;

export class Services implements IServices {
    model: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;
    }

    async getAll(filter:any): Promise<serviceTypeList> {
        try {

            const query = createQuery(filter);
            let result = this.model.find(query);

            if(filter.sort)
                result.sort(filter.sort);

            if(filter.page && filter.limit)
                paginate(filter.page, filter.limit, result);

            return await result;

        } catch (e) {
            logger.error(e);
            return [];
        }
    }

    async create(body: serviceTypes): Promise<serviceTypeNull> {
        try {
            return await this.model.create(body);
        } catch (e) {
            logger.error(e);
            return null;
        }
    }

    async delete(id: string): Promise<number> {
       try {
            const result:serviceTypeNull = await this.model.findByIdAndDelete(id);
            if (result)
                return 1;
            return 0;
        } catch (e) {
            logger.error(e);
            return -1;
        }
    }

    async getOne(id: string): Promise<serviceTypeNull> {
        try {
            return await this.model.findById(id);
        } catch (e) {
            logger.error(e);
            return null;
        }
    }

    async modify(id: string, body: {}): Promise<serviceTypeNull> {
        try {
            await this.model.findByIdAndUpdate(id, body);
            return await this.model.findById(id);
        } catch (e) {
            logger.error(e);
            return null;
        }
    }

}