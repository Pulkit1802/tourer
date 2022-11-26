import express, {Express} from 'express';
import {tourRouter, userRouter, tourRegistrationRouter} from "./routes";

const morgan = require('morgan');

const app: Express = express();

app.use((morgan('dev')));
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/registered/tours', tourRegistrationRouter);

export {
    app
}