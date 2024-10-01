import { hashSync } from "bcrypt";

export function crypt(pass: string) {
    return hashSync(pass, 10);
}