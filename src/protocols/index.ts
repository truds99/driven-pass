import { User } from "@prisma/client";

export type CustomError = {
    name: string;
    message: string;
  } & Error;
  

export type UserData = Omit<User, 'id' | 'createAt' | 'credentials'>

export type LoginData = Omit<UserData, 'name'>