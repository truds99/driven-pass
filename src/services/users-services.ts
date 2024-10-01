import { compareSync, hashSync } from "bcrypt";
import { getPasswordRep } from "../repositories/users-repository";
import jwt from "jsonwebtoken";

export function crypt(pass: string) {
    return hashSync(pass, 10);
}

export async function passwordIsCorrect(email: string, password: string) {
    const realPassword = await getPasswordRep(email);
    return compareSync(password, realPassword);
}

export function getToken(email: string) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return token;
}