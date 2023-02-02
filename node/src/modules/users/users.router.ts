import express from "express";
import { authToken } from "../../middlewares/authentication";
import { getUser, postUser } from "./users.controller";

const router = express.Router();

router
    .get("/", authToken, getUser)
    .post("/", postUser);

export default router;
