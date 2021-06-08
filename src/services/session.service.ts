import Session from "../models/session.model";
import { SessionDocument } from "../models/session.model";
import { UserDocument } from "../models/user.model";

export async function createSession(
  userId: SessionDocument["user"],
  userAgent: SessionDocument["userAgent"]
) {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
}
