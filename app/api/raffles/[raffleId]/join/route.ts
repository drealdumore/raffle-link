import Raffle from "@/app/models/Raffle";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

// POST :: JOIN RAFFLE
export const POST = async (
  req: NextRequest,
  { params }: { params: { raffleId: string } }
) => {
  try {
    await connectMongoDB();

    const { name, email } = await req.json();

    if (!name || !email) {
      return new NextResponse("Name and email are required", { status: 400 });
    }

    const raffle = await Raffle.findById(params.raffleId);
    console.log(raffle);
    

    if (!raffle) {
      return new NextResponse("Raffle not found", { status: 404 });
    }

    const participantExists = raffle.participants.some(
      (participant: { email: string }) => participant.email === email
    );

    if (participantExists) {
      return new NextResponse("You have already joined this raffle", { status: 400 });
    }

    raffle.participants.push({ name, email });
    await raffle.save();

    // Send confirmation email to the participant
    // You can use your email sending utility here
    // sendConfirmationEmail(name, email);

    return new NextResponse(JSON.stringify({ message: "Successfully joined the raffle" }), {
      status: 200,
    });
  } catch (err) {
    console.log("[raffleId_join_POST]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
