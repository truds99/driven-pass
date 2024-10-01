import httpStatus from "http-status";
import { Request, Response } from "express";
import { postUserRep, verifyExistentEmail } from "../repositories/users-repository";
import { UserData } from "protocols";
import { emailAlreadyRegisteredError } from "../errors";

export async function postUser(req: Request, res: Response) {
    const userData: UserData = req.body;
    if(await verifyExistentEmail(userData.email)) throw emailAlreadyRegisteredError();

    await postUserRep(userData);

    res.sendStatus(httpStatus.CREATED)
}