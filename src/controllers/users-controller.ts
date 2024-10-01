import httpStatus from "http-status";
import { Request, Response } from "express";
import { postUserRep, verifyExistentEmail } from "../repositories/users-repository";
import { LoginData, UserData } from "protocols";
import { emailAlreadyRegisteredError, emailNotRegisteredError, incorrectPasswordError } from "../errors";
import { getToken, passwordIsCorrect } from "../services/users-services";

export async function postUser(req: Request, res: Response) {
    const userData: UserData = req.body;

    if(await verifyExistentEmail(userData.email)) throw emailAlreadyRegisteredError();
    await postUserRep(userData);

    res.sendStatus(httpStatus.CREATED)
}

export async function login(req: Request, res: Response) {
    const loginData: LoginData = req.body;

    if(!await verifyExistentEmail(loginData.email)) throw emailNotRegisteredError();
    if(!await passwordIsCorrect(loginData.email, loginData.password)) throw incorrectPasswordError();
    const token = getToken(loginData.email);

    res.status(httpStatus.OK).send(token)
}