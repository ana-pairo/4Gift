import { prisma } from "../../src/config/database";

export async function cleanDb() {
    await prisma.tokens.deleteMany({});
    await prisma.storeContact.deleteMany({});
    await prisma.stores.deleteMany({});
    await prisma.relativesContact.deleteMany({});
    await prisma.follows.deleteMany({});
    await prisma.address.deleteMany({});
    await prisma.users.deleteMany({});
}
