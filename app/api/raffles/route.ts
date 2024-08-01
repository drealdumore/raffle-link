import Raffle from "@/models/Raffle";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

// // CREATE RAFFLE
export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    const session = await getServerSession(options);
    // const session = await getServerSession();

    // TODO -  fix the AUTH FIRST.
    //? ADD PROVIDER USER TO DB THEN USE THEIR ID AS CREATED BY

    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // const userId = session.user?.id;

    const { title, description, startDate, endDate } = await req.json();

    if (!title || !description || !startDate || !endDate) {
      return new NextResponse("Not enough data to create a raffle", {
        status: 400,
      });
    }

    const newRaffle = await Raffle.create({
      title,
      description,
      startDate,
      endDate,
      // createdBy: userId,
      participants: [],
    });

    await newRaffle.save();

    return NextResponse.json(newRaffle, { status: 200 });
  } catch (err) {
    console.log("[raffles_POST]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

// GET ALL RAFFLES :: GET ALL
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
