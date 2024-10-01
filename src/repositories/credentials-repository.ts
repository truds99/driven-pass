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