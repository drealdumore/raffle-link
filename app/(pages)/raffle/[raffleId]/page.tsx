import JoinInput from "@/components/raffle/joinInput";
import React from "react";

const page = ({ params }: { params: { raffleId: string } }) => {
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm md:w-full max-w-md mx-auto w-[95%] bg-white/20 ring-4 ring-gray-900/5">
      <div className="h-screen p-2 flex flex-col">
        <div className="h-40 bg-neutral-400 rounded-md flex items-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-xl">Raffle Name</h1>
          </div>
        </div>

<div></div>

        <div className="h-50">
          <JoinInput />
        </div>
      </div>
    </div>
  );
};

export default page;
