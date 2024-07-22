import User from "@/app/models/User";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    const { name, email, password, passwordConfirm } = await req.json();

    if (!name || !email || !password || !passwordConfirm) {
      return new NextResponse("Not enough data to create a user", {
        status: 400,
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    await newUser.save();

    return NextResponse.json(newUser, { status: 200 });
  } catch (err) {
    console.log("[users_POST]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    const users = await User.find();

    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.log("[users_GET]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
