import { Request, Response } from "express";
import { omit } from "lodash";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.send(omit(user.toJSON(), "password")); //omit sending the password in the response
  } catch (error) {
    logger.error(error);
    res.status(409).send(error.message);
  }
}
