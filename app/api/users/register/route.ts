import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectMongoDB } from "@/app/utils/mongoConnect";

export async function POST(request: any) {
  try {
    await connectMongoDB();

    const { email, password, passwordConfirm } = await request.json();

    if (!email || !password || !passwordConfirm) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== passwordConfirm) {
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const user = new User({
      email,
      password,
    });

    await user.save();

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
