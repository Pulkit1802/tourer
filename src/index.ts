import {connectDB} from "./models/connectDB";
const dotEnv = require('dotenv');

dotEnv.config({path: './config.env'});

import {app} from './app'

connectDB()
    .then(():void => {
        console.log("Connected To Database");
    })
    .catch((e) => {console.log(e)});

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})