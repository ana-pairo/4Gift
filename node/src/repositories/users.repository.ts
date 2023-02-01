import { Prisma } from "@prisma/client";
import { connectDb } from "../config/database";

const prisma = connectDb();

async function getUserByToken(accessToken: string) {
  return prisma.users.findFirst({
    where: {
      accessToken,
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
  getUserByToken,
  upsertUser,
};

export default usersRepository;
