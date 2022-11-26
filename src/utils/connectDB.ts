import mongoose, {Mongoose} from 'mongoose';
import logger from "./logger";

export const connectDB = async ():Promise<Mongoose> => {
    logger.info(process.env.DATABASE);
    return await mongoose.connect(String(process.env.DATABASE));
}