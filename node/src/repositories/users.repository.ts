import { Prisma } from "@prisma/client";
import { connectDb } from "../config/database";
import { UpdateUserParams } from "../modules/users/users.type";

const prisma = connectDb();

async function createUser(user: Prisma.UsersCreateManyInput) {
  return prisma.users.create({
    data: {
      ...user,
    },
  });
}

async function upsertUser(user: Prisma.UsersCreateManyInput) {
  return prisma.users.upsert({
    where: {
      email: user.email,
    },
    create: {
      ...user,
    },
    update: {
      accessToken: user.accessToken,
    },
  });
}

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

async function updateUser({ newUserData, userId }: UpdateUserParams) {
  return prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      ...newUserData,
    },
  });
}

export const usersRepository = {
  findUserByToken,
  createUser,
  updateUser,
  upsertUser,
  findUserById,
};
