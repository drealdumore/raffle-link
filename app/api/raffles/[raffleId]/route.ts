import Raffle from "@/app/models/Raffle";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { raffleId: string } }
) => {
  try {
    await connectMongoDB();

    const raffle = await Raffle.findById(params.raffleId);

    if (!raffle) {
      return new NextResponse(
        JSON.stringify({ message: "Raffle not found!" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(raffle), {
      status: 200,
      headers: {
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.log("[raffleId_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

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
      return new NextResponse(
        JSON.stringify({ message: "Raffle not found" }),
        { status: 404 }
      );
    }

    await Raffle.findByIdAndDelete(raffle._id);

    return new NextResponse(JSON.stringify({ message: "Product deleted" }), {
      status: 200,
    });
  } catch (err) {
    console.log("[raffleId_DELETE]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
