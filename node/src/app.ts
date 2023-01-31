import express from "express";
import cors from "cors";

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/status", (_req, res) => res.send("Ok"));

export default app;