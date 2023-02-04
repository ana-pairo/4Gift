import { prisma } from "../src/config/database";

export async function cleanDb() {
  await prisma.follows.deleteMany({});
  await prisma.users.deleteMany({});
}
