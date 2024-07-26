import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import User from "@/app/models/User";
import { connectMongoDB } from "@/app/utils/mongoConnect";

// CREATE USER ::: ADD USERID TO DB
export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    const { userId, email } = await req.json();

    if (!userId || !email) {
      return new NextResponse("Missing userId or email", { status: 400 });
    }

    const existingUser = await User.findOne({ userId });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const newUser = new User({ userId, email });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.log("[user_POST]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};

// GET USER :::
export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectMongoDB();

    const user = await User.findOne({ userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log("[user_GET]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
