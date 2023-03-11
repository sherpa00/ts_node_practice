import express, { Application,Request,Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app : Application = express();

const port = process.env.PORT;

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get("/",(req: Request,res: Response) => {
    res.send("hello Express + Typescript !!!!!!")
});

app.listen(port,(): void => {
    console.log(`Server is listening at ${port}..`);
})

