import {Model} from "mongoose";
import logger from "../utils/logger";
import {createQuery} from "./queries/queryCreator";
import {paginate} from "./queries/pagination";
import {serviceTypes, serviceTypeNull, serviceTypeList} from "./serviceType";
import {IServices} from "./IServices";

export class Services implements IServices {
    model: Model<any>;
    ref: any;

    constructor(model: Model<any>, ...ref: any) {
        this.model = model;
        this.ref = ref
    }

    async getAll(filter:any): Promise<serviceTypeList> {
        try {

            const query = createQuery(filter);
            let results = this.model.find(query);

            if(filter.sort)
                results.sort(filter.sort);

            if(filter.page && filter.limit)
                paginate(filter.page, filter.limit, results);

            if(this.ref.length)
                //@ts-ignore
                this.ref.forEach(r => results.populate(r));

            return await results;

        } catch (e) {
            logger.error(e);
            return [];
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