import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;
export function connectDb(): void {
    return prisma = new PrismaClient();
}

export async function disconnectDB(): Promise<void> {
    await prisma?.$disconnect();
}