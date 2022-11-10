const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

import {app} from './app'

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})