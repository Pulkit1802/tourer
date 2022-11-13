import {ITours} from "../models/tours/toursInterface";
import {UserInterface} from "../models/user/userInterface";

type serviceTypes = ITours|UserInterface;
type serviceTypesList = ITours[]|UserInterface[];
type serviceTypeNull = serviceTypes | null;

export interface IServices {
    getAll(filter: any): Promise<serviceTypes[]>;
    getOne(id: string): Promise<serviceTypeNull>;
    create(body: serviceTypes): Promise<serviceTypeNull>;
    delete(id: string): Promise<number>;
    modify(id: string, body: {}): Promise<serviceTypeNull>
}