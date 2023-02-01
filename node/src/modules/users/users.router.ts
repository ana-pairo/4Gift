import express from "express";

const router = express.Router();

router
  .post("/", (_req, res) => {
    console.log("post users");
    res.sendStatus(200);
  })
  .get("/", (_req, res) => {
    console.log("get users");
    res.sendStatus(200);
  });

export default router;
