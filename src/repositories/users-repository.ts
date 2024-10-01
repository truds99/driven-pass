import { UserData } from "../protocols/index";
import { prisma } from "../database/index";
import { crypt } from "../services/users-services";

export async function postUserRep(userData: UserData) {
    const { name, password, email } = userData;

    const passwordCrypted = crypt(password);

    await prisma.user.create({
        data: {
            name,
            password: passwordCrypted,
            email
        }
    })
}

export async function verifyExistentEmail(email:string) {
    return await prisma.user.findFirst({
        where: { email }
    })
}