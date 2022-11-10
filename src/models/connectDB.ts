import mongoose, {Mongoose} from 'mongoose';

export const connectDB = ():Promise<Mongoose> => {
    return mongoose.connect(String(process.env.DATABASE));
}