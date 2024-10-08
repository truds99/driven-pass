import { CredentialData } from "protocols";
import { prisma } from "../database/index";
import dotenv from "dotenv";
dotenv.config();
import Cryptr from "cryptr";
import { existentCredentialError } from "../errors/index";
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
    if (existingCredential) throw existentCredentialError();
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

export async function updateCredentialRep(credentialData: CredentialData, userId: number, id: number) {
    const { username, password, url, title } = credentialData;

    const encrypted = cryptr.encrypt(password);

    await prisma.credential.update({
        where: {
            id
        },
        data: {
            username,
            password: encrypted,
            url,
            title,
        },
    });
}

export async function deleteCredentialsRep(id: number, column: 'id' | 'userId') {
    const where = (column === 'id' ? { id } : { userId: id });

    await prisma.credential.deleteMany({
        where: where,
    });
}
