import { User, Credential } from "@prisma/client";

export type CustomError = {
    name: string;
    message: string;
  } & Error;
  

export type UserData = Omit<User, 'id' | 'createAt' | 'credentials'>

export type LoginData = Omit<UserData, 'name'>

export type CredentialData = Omit<Credential, 'id' | 'userId' | 'createAt'>