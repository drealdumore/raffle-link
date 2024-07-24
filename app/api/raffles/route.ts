import Raffle from "@/app/models/Raffle";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// CREATE RAFFLE
export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    console.log(userId);

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    await connectMongoDB();

    const { title, description, isPaid, price } = await req.json();

    if (!title || !description || !isPaid ) {
      return new NextResponse("Not enough data to create a raffle", {
        status: 400,
      });
    }

    const newRaffle = await Raffle.create({
      title,
      description,
      isPaid,
      price,
      createdBy: userId
    });

    await newRaffle.save();

    return NextResponse.json(newRaffle, { status: 200 });
  } catch (err) {
    console.log("[raffles_POST]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    const raffles = await Raffle.find().sort({ createdAt: "desc" });

    return NextResponse.json(raffles, { status: 200 });
  } catch (err) {
    console.log("[raffles_GET]", err);

    return new NextResponse("Internal Error", { status: 500 });
  }
};
