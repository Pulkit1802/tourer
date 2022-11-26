import {UserInterface} from "../models/user/userInterface";
import {ITours} from "../models/tours/toursInterface";

type serviceTypes = ITours | UserInterface;
type serviceTypeList = ITours[] | UserInterface[];
type serviceTypeNull = serviceTypes | null;

export {
    serviceTypes,
    serviceTypeNull,
    serviceTypeList
}
