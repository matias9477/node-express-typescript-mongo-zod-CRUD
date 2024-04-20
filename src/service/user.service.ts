import { omit } from "lodash";
import UserModel, { UserInput } from "../models/user.model";

export async function createUser(input: UserInput) {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error.message); // It's better to use error.message to get a readable error message
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });
  if (!user) return false;
  const isValid = await user.comparePassword(password);

  if (!isValid) return false;
  return omit(user.toJSON(), "password");
}
