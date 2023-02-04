import express from "express";
import { authToken } from "../../middlewares/authentication.middleware";
import { validateBody } from "../../middlewares";
import { getUser, postUser, putUser } from "./users.controller";

import { postUserSCHEMA, putUsersSCHEMA } from "./users.schema";

const router = express.Router();

router
    .get("/", authToken, getUser)
    .post("/", validateBody(postUserSCHEMA), postUser)
    .put("/", authToken, validateBody(putUsersSCHEMA), putUser);

export default router;
