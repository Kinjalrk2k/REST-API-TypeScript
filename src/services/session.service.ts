import { LeanDocument } from "mongoose";
import config from "config";
import Session from "../models/session.model";
import { SessionDocument } from "../models/session.model";
import { UserDocument } from "../models/user.model";
import { sign } from "../utils/jwt.util";

export async function createSession(
  userId: SessionDocument["user"],
  userAgent: SessionDocument["userAgent"]
) {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTTL") }
  );

  return accessToken;
}
