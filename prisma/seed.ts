import { PrismaClient } from '@prisma/client';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const cryptr = new Cryptr(process.env.JWT_SECRET);

async function main() {
 
    const demoUser = {
        name: "Demo",
        email: "demo@driven.com.br",
        password: cryptr.encrypt("demo123"), 
    };

    const existingUser = await prisma.user.findUnique({
        where: { email: demoUser.email },
    });

    if (!existingUser) {
        await prisma.user.create({
        data: demoUser,
        });
    }

}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

