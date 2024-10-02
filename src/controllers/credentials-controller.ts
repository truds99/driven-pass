import httpStatus from "http-status";
import { Request, Response } from "express";
import { CredentialData } from "protocols";
import { existingCredential, getCredentialsRep, getOneCredentialRep, postCredentialRep, updateCredentialRep } from "../repositories/credentials-repository";
import { User, Credential } from "@prisma/client";
import { badRequestError, credentialNotFoundError, existentCredentialError, unauthorizedError } from "../errors/index"
import { decryptCredentials, verifyAuthorization } from "../services/credentials-services";

export async function postCredential(req: Request, res: Response) {
    const { username, password, title, url } = req.body as CredentialData
    const user = res.locals.user as User

    if(await existingCredential(title, user.id)) throw existentCredentialError();

    await postCredentialRep(req.body, user.id);

    res.sendStatus(httpStatus.CREATED)
}

export async function getCredentials(req: Request, res: Response) {
    
    const credentials = await getCredentialsRep();

    res.status(httpStatus.OK).send(decryptCredentials(credentials));
}

export async function getOneCredential(req: Request, res: Response) {
    const { id } = req.params;
    if(Number(id) <= 0 || Number(id) % 1 !== 0) throw badRequestError();
    const user = res.locals.user as User
    const credential = await getOneCredentialRep(Number(id));
    if (!credential) throw credentialNotFoundError();
    if (!verifyAuthorization(credential, user.id)) throw unauthorizedError();
    const arr: Credential[] = [];
    arr.push(credential);

    res.status(httpStatus.OK).send(decryptCredentials(arr));
}

export async function editCredential(req: Request, res: Response) {
    const { username, password, title, url } = req.body as CredentialData
    const user = res.locals.user as User
    const id = Number(req.params.id)
    if(Number(id) <= 0 || Number(id) % 1 !== 0) throw badRequestError();
    const credential = await getOneCredentialRep(id);
    if (!credential) throw credentialNotFoundError();
    if (!verifyAuthorization(credential, user.id)) throw unauthorizedError();

    await updateCredentialRep(req.body, user.id, credential.id);

    res.sendStatus(httpStatus.NO_CONTENT)
}