import { Prisma } from "@prisma/client";
import { notFoundError } from "../../errors";
import { usersRepository } from "../../repositories";

export async function getUserByToken(acessToken: string) {
  const user = await usersRepository.findUserByToken(acessToken);

  if (!user) throw notFoundError();

  const { id, email, displayName, phoneNumber, photoURL, birthday } = user;

  const userData = {
    id,
    email,
    displayName,
    phoneNumber,
    photoURL,
    birthday,
  };

  return userData;
}

export async function createUser(userData: Prisma.UsersCreateInput) {
  return await usersRepository.upsertUser(userData);
}

const usersService = {
  getUserByToken,
  createUser,
};

export default usersService;
