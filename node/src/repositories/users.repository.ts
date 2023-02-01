import { Prisma } from "@prisma/client";
import { connectDb } from "../config/database";

const prisma = connectDb();

async function findUserByToken(accessToken: string) {
  return prisma.users.findFirst({
    where: {
      accessToken,
    },
    include: {
      follower: true,
    },
  });
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

const usersRepository = {
  findUserByToken,
  upsertUser,
};

export default usersRepository;
