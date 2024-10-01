import joi from "joi";
import { LoginData, UserData } from "protocols";

export const userSchema = joi.object<UserData>({
    name: joi.string().required().trim(),
    email: joi.string().required().trim().email(),
    password: joi.string().required().min(6)
})

export const loginSchema = joi.object<LoginData>({
    email: joi.string().required().trim().email(),
    password: joi.string().required().min(6)
})