import Raffle from "@/app/models/Raffle";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// GET RAFFLE ::: FIND RAFFLE
export const GET = async (
  req: NextRequest,
  { params }: { params: { raffleId: string } }
) => {
  try {
    await connectMongoDB();

    if (!params.raffleId) {
      return new NextResponse("Raffle ID is required", { status: 400 });
    }

    const raffle = await Raffle.findById(params.raffleId);

    if (!raffle) {
      return new NextResponse("Raffle not found!", { status: 404 });
    }

    return NextResponse.json(raffle, { status: 200 });
  } catch (err) {
    console.log("[raffles_search_GET]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};

// PATCH RAFFLE ::: UPDATE RAFFLE
export const PATCH = async (
  req: NextRequest,
  { params }: { params: { raffleId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectMongoDB();

    const { title, description, startDate, endDate } = await req.json();

    if (!title && !description && !startDate && !endDate) {
      return new NextResponse("No data to update", { status: 400 });
    }

    const raffle = await Raffle.findById(params.raffleId);

    if (!raffle) {
      return new NextResponse("Raffle not found", {
        status: 404,
      });
    }

    if (raffle.createdBy !== userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    raffle.title = title || raffle.title;
    raffle.description = description || raffle.description;
    raffle.startDate = startDate || raffle.startDate;
    raffle.endDate = endDate || raffle.endDate;

    await raffle.save();

    return new NextResponse(JSON.stringify({ message: "Raffle updated" }), {
      status: 200,
    });
  } catch (err) {
    console.log("[raffleId_PATCH]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};

// DELETE RAFFLE ::: DELETE RAFFLE
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { raffleId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectMongoDB();

    const raffle = await Raffle.findById(params.raffleId);

    if (!raffle) {
      return new NextResponse(JSON.stringify({ message: "Raffle not found" }), {
        status: 404,
      });
    }

    if (raffle.createdBy !== userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await Raffle.findByIdAndDelete(raffle._id);

    return new NextResponse("Raffle deleted", {
      status: 200,
    });
  } catch (err) {
    console.log("[raffleId_DELETE]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
