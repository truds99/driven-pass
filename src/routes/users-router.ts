import validateSchema from "../middlewares/schemas-middleware";
import { postUser } from "../constrollers/users-controller";
import { Router } from "express";
import { userSchema } from "../schemas/user-schema";

export const usersRouter = Router();

usersRouter.post('/sign-up', validateSchema(userSchema), postUser);