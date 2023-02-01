import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { unauthorizedError } from "../errors/unauthorized.error";
import usersRepository from "../repositories/users.repository";

export async function authToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;

  if (!header) return generateUnauthorizedResponse(res);

  const token = header.replace("Bearer ", "");

  try {
    const { id } = await usersRepository.getUserByToken(token);

    if (!id) return generateUnauthorizedResponse(res);

    res.locals.userId = id;
  } catch (error) {
    return generateUnauthorizedResponse(res);
  }

  res.locals.acessToken = token;
  next();
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}
