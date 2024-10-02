import { Credential } from "@prisma/client";
import Cryptr from "cryptr";
import { badRequestError, credentialNotFoundError, unauthorizedError } from "../errors/index";
import { getOneCredentialRep } from "../repositories/credentials-repository";
const cryptr = new Cryptr(process.env.JWT_SECRET);

export function decryptCredentials(credentials: Credential[]) {
    return credentials.map(credential => ({
        ...credential,
        password: cryptr.decrypt(credential.password)
    }));
}

export async function verifyCredential(id: number, userId: number) {
    const credential = await getOneCredentialRep(id);
    if (!credential) throw credentialNotFoundError();
    if (!(credential.userId === userId)) throw unauthorizedError();

    return credential;
}

export function verifyId(id: number) {
    if(id <= 0 || id % 1 !== 0 || isNaN(id)) throw badRequestError();
}