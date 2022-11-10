import express, {Express} from 'express';
import {userRouter} from "./routes/userRoutes";
const morgan = require('morgan');

const app: Express = express();

app.use((morgan('dev')));
app.use(express.json());

app.use('/api/v1/users', userRouter);

export {
    app
}