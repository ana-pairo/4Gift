import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";
import { invalidDataError } from "../errors/invalidData.error";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return validate(schema, "body");
}

export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return validate(schema, "params");
}


function validate(schema: ObjectSchema, type: "body" | "params") {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });

        if (!error) {
            next();
        } else {
            console.log(error.details)
            res.status(httpStatus.BAD_REQUEST).send(invalidDataError(error.details.map((d) => d.message)));
        }
    };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;
