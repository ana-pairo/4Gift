import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;
export function connectDb(): void {
    prisma = new PrismaClient();
}