import { ApplicationError } from "../protocols/types";

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}
