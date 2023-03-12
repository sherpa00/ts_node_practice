import express, { Request,Response } from 'express';

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/',(req: Request,res: Response) => {
    res.status(200).json({
        message: 'Success'
    })
});

export default app;

