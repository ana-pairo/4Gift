import express from "express";
import cors from "cors";

import signRouter from "./modules/sign/sign.router";
import usersRouter from "./modules/users/users.router";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/status", (_req, res) => res.send("Ok"))
  .use("/users", usersRouter)
  .use("/sign", signRouter);

export default app;
