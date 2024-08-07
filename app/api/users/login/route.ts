import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  await connectMongoDB();

  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    //   expiresIn: process.env.JWT_EXPIRES_IN,
    // });

    // Include user information in the JWT payload
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email: user.email,
        image: user.image, // Assuming you store user image URL in the user document
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    console.log(token);

    return NextResponse.json(
      { message: "Login successfully", token },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
