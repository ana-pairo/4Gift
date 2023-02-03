import express from "express";
import { authToken } from "../../middlewares/authentication.middleware";
import { validateBody } from "../../middlewares";
import { getUser, postUser } from "./users.controller";

import { postUserSCHEMA } from "./users.schema"

const router = express.Router();

router
    .get("/", authToken, getUser)
    .post("/", validateBody(postUserSCHEMA), postUser);

export default router;
