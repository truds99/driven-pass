import httpStatus from "http-status";
import { Request, Response } from "express";
import { CredentialData } from "protocols";
import { deleteCredentialRep, existingCredential, getCredentialsRep, postCredentialRep, updateCredentialRep } from "../repositories/credentials-repository";
import { User, Credential } from "@prisma/client";
import { decryptCredentials, verifyCredential, verifyId } from "../services/credentials-services";

export async function postCredential(req: Request, res: Response) {
    const { username, password, title, url } = req.body as CredentialData
    const user = res.locals.user as User

    await existingCredential(title, user.id);

    await postCredentialRep(req.body, user.id);

    res.sendStatus(httpStatus.CREATED)
}

export async function getCredentials(req: Request, res: Response) {
    
    const credentials = await getCredentialsRep();

    res.status(httpStatus.OK).send(decryptCredentials(credentials));
}

export async function getOneCredential(req: Request, res: Response) {
    const id = Number(req.params.id)
    verifyId(id);

    const user = res.locals.user as User

    const credential = await verifyCredential(id, user.id);

    const arr: Credential[] = [];
    arr.push(credential);

    res.status(httpStatus.OK).send(decryptCredentials(arr)[0]);
}

export async function editCredential(req: Request, res: Response) {
    const { username, password, title, url } = req.body as CredentialData
    const user = res.locals.user as User
    const id = Number(req.params.id)
    verifyId(id);

    const credential = await verifyCredential((id), user.id);

    await updateCredentialRep(req.body, user.id, credential.id);

    res.sendStatus(httpStatus.NO_CONTENT)
}

export async function deleteCredential(req: Request, res: Response) {
    const user = res.locals.user as User
    const id = Number(req.params.id)
    verifyId(id);

    const credential = await verifyCredential((id), user.id);

    await deleteCredentialRep(credential.id);

    res.sendStatus(httpStatus.NO_CONTENT)
}