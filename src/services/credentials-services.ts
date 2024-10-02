import { Credential } from "@prisma/client";
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.JWT_SECRET);

export function decryptCredentials(credentials: Credential[]) {
    return credentials.map(credential => ({
        ...credential,
        password: cryptr.decrypt(credential.password)
    }));
}

export function verifyAuthorization(credential: Credential, userId: number) {
    return (credential.userId === userId);
}