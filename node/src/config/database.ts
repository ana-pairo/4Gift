import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;
export function connectDb() {
  return (prisma = new PrismaClient());
}
