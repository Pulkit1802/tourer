import {connectDB} from "./models/connectDB";
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

import {app} from './app'

connectDB()
    .then(() => {
        console.log("Connected To Database");
    });

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})