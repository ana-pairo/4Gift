import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import app from "../../src/app";
import { createUser } from "../factories";

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
        id,
        email,
        displayName,
        phoneNumber,
        photoURL,
        birthday,
      });
    });
  });
});
