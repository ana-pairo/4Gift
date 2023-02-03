import { Prisma } from "@prisma/client";
import { connectDb } from "../config/database";

const prisma = connectDb();

async function findUserByToken(accessToken: string) {
  const retorno = await prisma.users.findFirst({
    where: {
      accessToken,
    },
  });
  return retorno;
}

async function findUserById(id: number) {
  return prisma.users.findFirst({
    where: {
      id,
    },
  });
}

async function upsertUser(user: Prisma.UsersCreateInput) {
  return prisma.users.upsert({
    where: {
      email: user.email,
    },
    update: user,
    create: user,
  });
}

export const usersRepository = {
  findUserByToken,
  upsertUser,
};
