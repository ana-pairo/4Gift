import { notFoundError } from "../../errors";
import usersRepository from "../../repositories/users.repository";

export async function getUserByToken(acessToken: string) {
  const user = await usersRepository.findUserByToken(acessToken);

  if (!user) throw notFoundError();

  const { id, email, displayName, phoneNumber, photoURL, birthday, follower } =
    user;

  const userData = {
    id,
    email,
    displayName,
    phoneNumber,
    photoURL,
    birthday,
    follower,
  };

  return userData;
}

export async function createUser() { }

const usersService = {
  getUserByToken,
  createUser,
};

export default usersService;
