import { Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database";

export async function createUser(
  params: Partial<Prisma.UsersCreateManyInput> = {}
) {
  const email = params.email ? params.email : faker.internet.email();
  const token = params.accessToken
    ? params.accessToken
    : faker.internet.password(30);

  return prisma.users.create({
    data: {
      ...params,
      email,
      accessToken: token,
    },
  });
}

export async function createCompleteUser() {
  const email = faker.internet.email();
  const token = faker.internet.password(30);
  const displayName = faker.name.fullName();
  const photoURL = faker.internet.avatar();
  const birthday = faker.date.birthdate({ min: 18 }).toISOString();
  const phoneNumber = faker.phone.number("(##) 9####-####");

  return prisma.users.create({
    data: {
      email,
      accessToken: token,
      displayName,
      photoURL,
      birthday,
      phoneNumber,
    },
  });
}

export async function createValidFullUserBody(
  params: Partial<Prisma.UsersCreateManyInput> = {}
) {
  const email = params.email ? params.email : faker.internet.email();
  const displayName = faker.name.fullName();
  const photoURL = faker.internet.avatar();
  const birthday = faker.date.birthdate({ min: 18 }).toISOString();
  const phoneNumber = faker.phone.number("(##) 9####-####");

  const body = {
    email,
    displayName,
    phoneNumber,
    photoURL,
    birthday,
  };

  return body;
}

export async function createValidSimpleUserBody() {
  const email = faker.internet.email();
  const accessToken = faker.internet.password(30);

  const body = { email, accessToken };

  return body;
}
