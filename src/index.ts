import {connectDB} from "./utils/connectDB";
import logger from "./utils/logger";
const dotEnv = require('dotenv');

dotEnv.config({path: './config.env'});

import {app} from './app'

connectDB()
    .then(():void => {
        logger.info('Successfully connected to DB');
    })
    .catch((e) => {
        logger.error(`Failed to connect to DB`, e);
    });

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    logger.info(`Server started at port ${port}`);
})