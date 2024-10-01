import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from 'express';
import { invalidTokenError } from "../errors/index";
import { getUserByToken } from "../repositories/users-repository"

dotenv.config();

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) throw invalidTokenError();

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) return next(invalidTokenError()); 
        
        (async () => {
            const user = await getUserByToken(decoded);
            if (!user) {
                return next(invalidTokenError()); 
            }
            res.locals.user = user;
            next(); 
        })().catch(next); 
    });
    
}