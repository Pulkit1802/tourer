import express, {Express} from 'express';
import {userRouter} from './routes/userRoutes';
import {tourRouter} from './routes/tourRoutes';

const morgan = require('morgan');

const app: Express = express();

app.use((morgan('dev')));
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

export {
    app
}