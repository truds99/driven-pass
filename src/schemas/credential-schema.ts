import joi from "joi";
import { CredentialData } from "protocols";

export const credentialSchema = joi.object<CredentialData>({
    username: joi.string().required().trim(),
    password: joi.string().required(),
    url: joi.string().required().trim().uri(),
    title: joi.string().required().trim()
})