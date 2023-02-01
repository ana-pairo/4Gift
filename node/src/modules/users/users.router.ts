import express from "express";
import { authToken } from "../../middlewares/authentication";
import { getUser } from "./users.controller";

const router = express.Router();

router.get("/", authToken, getUser);

export default router;
