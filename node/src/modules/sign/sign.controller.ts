import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import signService from "./sign.service";

export async function signUpUser(req: Request, res: Response) {
  const userData: Prisma.UsersCreateInput = req.body;

  try {
    await signService.createNewUser(userData);

    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function signInUser(req: Request, res: Response) {
  const userData: Prisma.UsersCreateInput = req.body;

  try {
    const user = await signService.logUserIn(userData);

    return res.status(httpStatus.OK).send(user);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
