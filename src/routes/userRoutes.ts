import {Router} from "express";
import {createUser, deleteUser, getAllUsers, getSingleUser, updateUser} from "../controllers/userControllers";

const router = Router();

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


router
    .route('/:id')
    .get(getSingleUser)
    .delete(deleteUser)
    .patch(updateUser);

export {
    router as userRouter
}
