import { Prisma } from "@prisma/client";
import { notFoundError } from "../../errors";
import { usersRepository } from "../../repositories";
import { UpdateUserParams } from "./users.type";

export async function getUserById(userId: number) {
  const user = await usersRepository.findUserById(userId);

  if (!user) throw notFoundError();

  const { id, email, displayName, phoneNumber, photoURL, birthday } = user;

  const userData = {
    userId: id,
    email,
    displayName,
    phoneNumber,
    photoURL,
    birthday,
  };

  return userData;
}

export async function createNewUser(userData: Prisma.UsersCreateInput) {
  const { id, email, displayName, phoneNumber, photoURL, birthday } =
    await usersRepository.createUser(userData);

  const user = {
    userId: id,
    email,
    displayName,
    phoneNumber,
    photoURL,
    birthday,
  };

  return user;
}

export async function updatePreviousUser({
  userId,
  newUserData,
}: UpdateUserParams) {
  const { id, email, displayName, phoneNumber, photoURL, birthday } =
    await usersRepository.updateUser({
      userId,
      newUserData,
    });

  const user = {
    userId: id,
    email,
    displayName,
    phoneNumber,
    photoURL,
    birthday,
  };

  return user;
}

const usersService = {
  getUserById,
  createNewUser,
  updatePreviousUser,
};

export default usersService;
