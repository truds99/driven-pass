import express, { json } from "express";
import httpStatus from "http-status";
import { Request, Response } from "express";
import 'express-async-errors'
import dotenv from "dotenv";
import cors from "cors";
import db from "./database/index";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.get('/health', (req: Request, res: Response) => {
    res.send(`I'm ok`).status(httpStatus.OK);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
