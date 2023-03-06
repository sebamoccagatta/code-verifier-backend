import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//Configutation the .env file
dotenv.config();

//Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first Route of APP
app.get("/", (req: Request, res: Response) => {
    // Send Hello World
    res.send(
        "Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose"
    );
});

// Define the first Route of APP
app.get("/hello", (req: Request, res: Response) => {    
    let name = req.query.name ?? 'Anonimo';
    // Send Hello World
    res.status(200).json({
        "message": `Hola, ${name}` 
    })
});

app.get("/bye", (req: Request, res: Response) => {
    res.status(200).json({
        message:
            "Goodbye, world",
    });
});

//Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
