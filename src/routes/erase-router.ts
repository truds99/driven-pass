import { Router } from "express";
import { validateToken } from "../middlewares/auth-middleware";
import { deleteAccount } from "../controllers/credentials-controller";

export const eraseRouter = Router();

eraseRouter.delete('/erase', validateToken, deleteAccount);
