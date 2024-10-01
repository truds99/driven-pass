import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import httpStatus from "http-status";
import { Request, Response } from "express";
import 'express-async-errors'
import cors from "cors";
import { usersRouter } from "./routes/users-router";
import errorHandlerMiddleware from "./middlewares/error-handler-middleware";
import { credentialsRouter } from "./routes/credentials-router";

const app = express();
app.use(cors());
app.use(json());

app.use(usersRouter);
app.use(credentialsRouter);
app.use(errorHandlerMiddleware);

app.get('/health', (req: Request, res: Response) => {
    res.status(httpStatus.OK).send(`I'm ok`);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
