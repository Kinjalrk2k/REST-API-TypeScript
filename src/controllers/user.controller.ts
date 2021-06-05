import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";
import { createUser } from "../services/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = createUser(req.body);
    return res.json(omit(user, "password"));
  } catch (err) {
    log.error(err);
    res.status(409).send(err.message);
  }
}
