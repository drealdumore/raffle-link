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

          <div>
            {/* button */}
            <button
              type="submit"
              className="h-10 font-bdog truncate overflow-hidden w-full gap-2 font-normal group flex items-center justify-center   bg-neutral-900   text-white shadow-md shadow-black/5 transition-colors hover:bg-zinc-800 rounded-lg  disabled:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed "
            >
              <span className="ml-1">Join Raffle</span>
            </button>
          </div>
        </div>

        <div className="h-50">bottom</div>
      </div>
    </div>
  );
};

export default page;
