import UserModel, { UserInput } from "../models/user.model";

export async function createUser(input: UserInput) {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error.message); // It's better to use error.message to get a readable error message
  }
}
