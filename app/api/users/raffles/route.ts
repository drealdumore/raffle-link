import { revalidatePath } from "next/cache";
import User from "@/app/models/User";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectMongoDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const { raffleId } = await req.json();

    if (!raffleId) {
      return new NextResponse("Raffle Id required", { status: 400 });
    }

    const isCreated = user.raffles.includes(raffleId);

    if (isCreated) {
      // Dislike
      user.raffle = user.raffles.filter((id: string) => id !== raffleId);
    } else {
      // Like
      user.raffles.push(raffleId);
    }

    await user.save();

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
