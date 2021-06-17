import { FilterQuery, LeanDocument } from "mongoose";
import config from "config";
import Session from "../models/session.model";
import { SessionDocument } from "../models/session.model";
import { UserDocument } from "../models/user.model";
import { decode, sign } from "../utils/jwt.util";
import { get } from "lodash";
import { findUser } from "./user.service";

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

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  // decoding the refresh token
  const { decoded } = decode(refreshToken);

  if (!decoded || !get(decoded, "_id")) return false;

  // fetching the session
  const session = await Session.findById(get(decoded, "_id"));

  // check whether the session is valid
  if (!session || !session?.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = createAccessToken({ user, session });

  return accessToken;
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean();
}
