import {Router} from "express";
import {createUser, deleteUser, getAllUsers, getSingleUser} from "../controllers/userControllers";

const router = Router();

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


router
    .route('/:id')
    .get(getSingleUser)
    .delete(deleteUser);

export {
    router as userRouter
}
