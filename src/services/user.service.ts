import { omit } from "lodash";
import { DocumentDefinition, FilterQuery } from "mongoose";
import User, { UserDocument } from "../models/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (err) {
    throw new Error(err);
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne({ query }).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }

  const isValidPassword = await user.comparePasswords(password);

  if (!isValidPassword) {
    return false;
  }

  return omit(user.toJSON(), "password");
}
