import { CredentialData } from "protocols";
import { prisma } from "../database/index";
import dotenv from "dotenv";
dotenv.config();
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.JWT_SECRET);

export async function postCredentialRep(credentialData: CredentialData, userId: number) {
    const { username, password, url, title } = credentialData;

    const encrypted = cryptr.encrypt(password);

    await prisma.credential.create({
        data: {
            username,
            password: encrypted, 
            url,
            title,
            userId
        }
    })
}

export async function existingCredential(title: string, userId: number) {
    const existingCredential = await prisma.credential.findFirst({
        where: {
            AND: [
                { title },
                { userId }
            ]
        }
    });
    return existingCredential;
}

export async function getCredentialsRep() {
    const credentials = await prisma.credential.findMany();
    return credentials;
}

export async function getOneCredentialRep(id: number) {
    const credential = await prisma.credential.findUnique({
        where: { id }
    });
    return credential;
}

