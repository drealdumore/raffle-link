import JoinInput from "@/components/raffle/joinInput";
import React from "react";

const page = ({ params }: { params: { raffleId: string } }) => {
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm md:w-full max-w-md mx-auto w-[95%] bg-white/20 ring-4 ring-gray-900/5">
      <div className="h-screen p-2 flex flex-col">
        <div className="h-50 border-b ">
          <div className="h-[12rem] bg-gray-700 rounded"></div>

          <div className="flex flex-col item-center pt-4">
            <h1 className="font-cal text-center text-xl">Raffle Name</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              consequatur inventore vitae eligendi vel ducimus aliquid,
              laboriosam esse id voluptatum iste minus? Aliquid consequatur
              libero consequuntur eum qui reiciendis impedit?
            </p>

            <div>
              <p>created by: </p>
            </div>
          </div>

          <JoinInput />
        </div>

        <div className="h-50">bottom</div>
      </div>
    </div>
  );
};

export default page;
