import httpStatus from "http-status";
import { Request, Response } from "express";
import { CredentialData } from "protocols";
import { postCredentialRep } from "../repositories/credentials-repository";
import { User } from "@prisma/client";

export async function postCredential(req: Request, res: Response) {
    const { username, password, title, url } = req.body as CredentialData

    const user = res.locals.user as User

    await postCredentialRep(req.body, user.id);

    res.sendStatus(httpStatus.CREATED)
}