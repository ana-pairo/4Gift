import express from "express";
import { authToken } from "../../middlewares/authentication";
import { validateBody } from "../../middlewares/validateSchema";
import { getUser, postUser } from "./users.controller";

import { postUserSCHEMA } from "./users.schema"

const router = express.Router();

router
    .get("/", authToken, getUser)
    .post("/", validateBody(postUserSCHEMA), postUser);

export default router;
