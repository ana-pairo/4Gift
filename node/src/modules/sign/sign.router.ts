import express from "express";
import { validateBody } from "../../middlewares";
import { signInUser, signUpUser } from "./sign.controller";
import { signSCHEMA } from "./sign.schema";

const router = express.Router();

router
  .post("/up", validateBody(signSCHEMA), signUpUser)
  .post("/in", validateBody(signSCHEMA), signInUser);

export default router;
