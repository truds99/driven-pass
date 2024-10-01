import httpStatus from "http-status";
import { Request, Response } from "express";
import { CredentialData } from "protocols";
import { existingCredential, getCredentialsRep, postCredentialRep } from "../repositories/credentials-repository";
import { User } from "@prisma/client";
import { existentCredentialError } from "../errors/index"
import { decryptCredentials } from "../services/credentials-services";

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