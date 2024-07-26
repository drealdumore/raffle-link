"use server";

import User from "../models/User";
import { connectMongoDB } from "../utils/mongoConnect";

export async function createUser(user: any) {
  try {
    await connectMongoDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
