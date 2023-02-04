import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import usersService from "./users.service";
import { UsersParams } from "./users.type";

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
    const user = await usersService.createNewUser(userData);

    res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function putUser(req: Request, res: Response) {
  const { userId } = res.locals;
  const newUserData: UsersParams = req.body;

  try {
    const updatedUser = await usersService.updatePreviousUser({ newUserData, userId });

    res.status(httpStatus.OK).send(updatedUser)
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

}
