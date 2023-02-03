import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import usersService from "./users.service";

export async function getUser(req: Request, res: Response) {
  const { accessToken } = res.locals;

  try {
    const userData = await usersService.getUserByToken(accessToken);

    return res.status(httpStatus.OK).send(userData);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postUser(req: Request, res: Response) {
  const userData: Prisma.UsersCreateInput = req.body;

  try {
    await usersService.createUser(userData);

    res.sendStatus(httpStatus.CREATED)
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
