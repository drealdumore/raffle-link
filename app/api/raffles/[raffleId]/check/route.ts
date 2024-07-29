import Raffle from "@/models/Raffle";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

// POST :: CHECK IF USER JOINED RAFFLE
export const POST = async (
  req: NextRequest,
  { params }: { params: { raffleId: string } }
) => {
  try {
    await connectMongoDB();

    const { email } = await req.json();

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    const raffle = await Raffle.findById(params.raffleId);

    if (!raffle) {
      return new NextResponse("Raffle not found", { status: 404 });
    }

    const participantExists = raffle.participants.some(
      (participant: { email: string }) => participant.email === email
    );

    return new NextResponse(
      JSON.stringify({ joined: participantExists }),
      { status: 200 }
    );
  } catch (err) {
    console.log("[raffleId_check_POST]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};