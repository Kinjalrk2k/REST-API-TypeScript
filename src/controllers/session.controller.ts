import { Request, Response } from "express";
import { createAccessToken, createSession } from "../services/session.service";
import { updateSession, validatePassword } from "../services/user.service";
import { sign } from "../utils/jwt.util";
import config from "config";
import { get } from "lodash";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate email and password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid Email of Password");
  }

  // create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // create an access token
  const accessToken = createAccessToken({ user, session });

  // create a refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTTL"),
  });

  // send tokens back
  return res.json({ accessToken, refreshToken });
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}
