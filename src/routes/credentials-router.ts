import { credentialSchema } from "../schemas/credential-schema";
import validateSchema from "../middlewares/schemas-middleware";
import { Router } from "express";
import { deleteCredential, editCredential, getCredentials, getOneCredential, postCredential } from "../controllers/credentials-controller";
import { validateToken } from "../middlewares/auth-middleware";

export const credentialsRouter = Router();

credentialsRouter.post('/credentials', validateToken, validateSchema(credentialSchema), postCredential);
credentialsRouter.get('/credentials', validateToken, getCredentials);
credentialsRouter.get('/credentials/:id', validateToken, getOneCredential);
credentialsRouter.put('/credentials/:id', validateToken, validateSchema(credentialSchema), editCredential);
credentialsRouter.delete('/credentials/:id', validateToken, deleteCredential);
