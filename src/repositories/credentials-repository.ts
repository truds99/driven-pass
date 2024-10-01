import { CredentialData } from "protocols";
import { prisma } from "../database/index";

export async function postCredentialRep(credentialData: CredentialData, userId: number) {
    const { username, password, url, title } = credentialData;

    await prisma.credential.create({
        data: {
            username,
            password, 
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