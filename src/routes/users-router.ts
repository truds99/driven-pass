import validateSchema from "../middlewares/schemas-middleware";
import { login, postUser } from "../controllers/users-controller";
import { Router } from "express";
import { loginSchema, userSchema } from "../schemas/user-schema";

export const usersRouter = Router();

usersRouter.post('/sign-up', validateSchema(userSchema), postUser);
usersRouter.post('/sign-in', validateSchema(loginSchema), login);