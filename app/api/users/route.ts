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

// export const GET = async (req: NextRequest) => {
//   try {
//     await connectMongoDB();

//     const users = await User.find();

//     return NextResponse.json(users, { status: 200 });
//   } catch (err) {
//     console.log("[users_GET]", err);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// };

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 })
    }

    await connectMongoDB();

    let user = await User.findOne({ clerkId: userId })

    // When the user sign-in for the 1st, immediately we will create a new user for them
    if (!user) {
      user = await User.create({ clerkId: userId })
      await user.save()
    }

    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    console.log("[users_GET]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
