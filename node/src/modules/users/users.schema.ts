import { Prisma } from "@prisma/client";
import joi from "joi";
import { UsersParams } from "./users.type";

export const postUserSCHEMA = joi.object<Prisma.UsersCreateInput>({
  email: joi.string().email().required(),
  displayName: joi.string().allow(null),
  accessToken: joi.string().min(3).required(),
  photoURL: joi.string().uri().allow(null),
  phoneNumber: joi.string().min(14).max(15).allow(null),
  birthday: joi.string().isoDate().allow(null),
});

export const putUsersSCHEMA = joi.object<UsersParams>({
  displayName: joi.string().allow(null),
  photoURL: joi.string().uri().allow(null),
  phoneNumber: joi.string().min(14).max(15).allow(null),
  birthday: joi.string().isoDate().allow(null),
});
