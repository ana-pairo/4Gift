import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/config/database";
import {
  createCompleteUser,
  createUser,
  createValidFullUserBody,
  createValidSimpleUserBody,
} from "../factories";

const server = supertest(app);

describe("GET /users", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/users");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word(10);

    const response = await server
      .get("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe("when token is valid", () => {
    it("should respond with status 200 and user data", async () => {
      const validUser = await createUser();
      const token = validUser.accessToken;

      const { id, email, displayName, phoneNumber, photoURL, birthday } =
        validUser;

      const response = await server
        .get("/users")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.OK);
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

describe("POST /users", () => {
  it("should respond with status 400 when no body is given", async () => {
    const response = await server.post("/users");

    expect(response.status).toBe(400);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const body = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post("/users").send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    it("should respond with status 201 and user data", async () => {
      const validBody = await createValidSimpleUserBody();

      const response = await server.post("/users").send(validBody);

      const { id, email, displayName, phoneNumber, photoURL, birthday } =
        await prisma.users.findFirst({
          where: {
            accessToken: validBody.accessToken,
          },
        });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        userId: id,
        email,
        displayName,
        phoneNumber,
        photoURL,
        birthday,
      });
    });

    it("should create a new user on database", async () => {
      const validBody = await createValidSimpleUserBody();
      const previousUsersAmount = await prisma.users.count();

      await server.post("/users").send(validBody);

      const nextUsersAmount = await prisma.users.count();

      expect(nextUsersAmount).toBe(previousUsersAmount + 1);
    });
  });
});

describe("PUT /users", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.put("/users");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word(10);

    const response = await server
      .put("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe("when token is valid", () => {
    it("should respond with status 400 when no body is given", async () => {
      const validUser = await createUser();
      const token = validUser.accessToken;

      const response = await server
        .put("/users")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(400);
    });

    it("should respond with status 400 when body is not valid", async () => {
      const validUser = await createUser();
      const token = validUser.accessToken;
      const body = { [faker.lorem.word()]: faker.lorem.word() };

      const response = await server
        .put("/users")
        .set("Authorization", `Bearer ${token}`)
        .send(body);

      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    describe("when body is valid", () => {
      it("should respond with status 200 and updated user data", async () => {
        const previousUser = await createCompleteUser();
        const token = previousUser.accessToken;
        const body = await createValidFullUserBody({
          email: previousUser.email
        });

        const { displayName, photoURL, phoneNumber, birthday } = body;

        const response = await server
          .put("/users")
          .set("Authorization", `Bearer ${token}`)
          .send(body);

        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual({
          userId: previousUser.id,
          email: previousUser.email,
          displayName,
          photoURL,
          phoneNumber,
          birthday,
        });
      });
    });
  });
});
