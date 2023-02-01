import { notFoundError } from "../../errors";
import usersRepository from "../../repositories/users.repository";

export async function getUserByToken(acessToken: string) {
  const user = await usersRepository.findUserByToken(acessToken);

  if (!user) throw notFoundError();

  const { email, displayName, phoneNumber, photoURL, birthday, follower } =
    user;

  const userData = {
    email,
    displayName,
    phoneNumber,
    photoURL,
    birthday,
    follower,
  };

  return userData;
}

const usersService = {
  getUserByToken,
};

export default usersService;
