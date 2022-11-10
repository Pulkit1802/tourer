import mongoose from 'mongoose';

export const connectDB = async () => {
    return await mongoose.connect(String(process.env.DB));
}