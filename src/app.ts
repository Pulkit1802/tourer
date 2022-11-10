import express, {Express, Request, Response} from 'express'

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Successfully connected to backend",
    });
})

export {
    app
}