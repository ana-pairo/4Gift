import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/config/database";
import { createUser, createValidSimpleUserBody } from "../factories";
import { cleanDb } from "../helper";

const server = supertest(app);

beforeAll(async () => {
  await cleanDb();
});

describe("POST /sign/up", () => {
  it("should respond with status 400 when no body is given", async () => {
    const response = await server.post("/sign/up");

    expect(response.status).toBe(400);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const body = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post("/sign/up").send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    it("should respond with status 201", async () => {
      const validBody = await createValidSimpleUserBody();

      const response = await server.post("/sign/up").send(validBody);

      expect(response.status).toBe(201);
    });

    it("should create a new user on database", async () => {
      const validBody = await createValidSimpleUserBody();
      const previousUsersAmount = await prisma.users.count();

      await server.post("/sign/up").send(validBody);

      const nextUsersAmount = await prisma.users.count();

      expect(nextUsersAmount).toBe(previousUsersAmount + 1);
    });
  });
});

describe("POST /sign/in", () => {
  it("should respond with status 400 when no body is given", async () => {
    const response = await server.post("/sign/in");

    expect(response.status).toBe(400);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const body = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post("/sign/in").send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    it("should respond with status 200, update accessToken if the user already exists and send user data", async () => {
      const validUser = await createUser();
      const validBody = {
        email: validUser.email,
        accessToken: faker.internet.password(31),
      };

      const response = await server.post("/sign/in").send(validBody);

      const {
        id,
        email,
        displayName,
        phoneNumber,
        photoURL,
        birthday,
        accessToken,
      } = await prisma.users.findFirst({
        where: {
          email: validUser.email,
        },
      });

      expect(response.status).toBe(200);
      expect(accessToken).toBe(validBody.accessToken);
      expect(response.body).toEqual({
        userId: id,
        email,
        displayName,
        phoneNumber,
        photoURL,
        birthday,
      });
    });

    it("should respond with status 200, create a new user if does not exist yet and send user data", async () => {
      const validBody = await createValidSimpleUserBody();
      const previousUsersAmount = await prisma.users.count();

      const response = await server.post("/sign/in").send(validBody);

      const nextUsersAmount = await prisma.users.count();

      const { id, email, displayName, phoneNumber, photoURL, birthday } =
        await prisma.users.findFirst({
          where: {
            email: validBody.email,
          },
        });

      expect(response.status).toBe(200);
      expect(nextUsersAmount).toBe(previousUsersAmount + 1);
      expect(response.body).toEqual({
        userId: id,
        email,
        displayName,
        phoneNumber,
        photoURL,
        birthday,
      });
    });
  });
});
