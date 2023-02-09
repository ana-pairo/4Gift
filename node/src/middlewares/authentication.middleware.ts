import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { unauthorizedError } from "../errors";

import { usersRepository } from "../repositories";

export async function authToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;

  if (!header) return generateUnauthorizedResponse(res);

  const token = header.replace("Bearer ", "");

  try {
    const { id } = await usersRepository.findUserByToken(token);

    if (!id) return generateUnauthorizedResponse(res);

    res.locals.userId = id;
  } catch (error) {
    return generateUnauthorizedResponse(res);
  }

  res.locals.accessToken = token;
  next();
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}
