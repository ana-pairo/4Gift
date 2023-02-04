import { Prisma } from "@prisma/client";
import { usersRepository } from "../../repositories";

export async function createNewUser(userData: Prisma.UsersCreateManyInput) {
  return await usersRepository.createUser(userData);
}

export async function logUserIn(userData: Prisma.UsersCreateManyInput) {
  const { id, email, displayName, phoneNumber, photoURL, birthday } =
    await usersRepository.upsertUser(userData);

  return {
    userId: id,
    email,
    displayName,
    photoURL,
    phoneNumber,
    birthday,
  };
}

const signService = {
  createNewUser,
  logUserIn,
};

export default signService;
