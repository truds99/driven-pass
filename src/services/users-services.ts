import { compareSync, hashSync } from "bcrypt";
import { getPasswordRep } from "../repositories/users-repository";

export function crypt(pass: string) {
    return hashSync(pass, 10);
}

export async function passwordIsCorrect(email: string, password: string) {
    const realPassword = await getPasswordRep(email);
    return compareSync(password, realPassword);
}