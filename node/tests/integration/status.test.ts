import supertest from "supertest";
import app from "../../src/app";
import { connectDb } from "../../src/config/database";
import { cleanDb } from "../helpers";
import httpStatus from "http-status";

const server = supertest(app);

describe("GET /status", () => {
  it("should respond with status 200", async () => {
    const response = await server.get("/status");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
});
