import Image from "next/image";
import React from "react";

const Splash = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex flex-col items-center space-y-10 text-center sm:mx-auto">
        <Image src="/assets/logo.png" alt="logo" height={200} width={200} />
        <h1 className="font-display text-4xl font-bold text-neutral-800 transition-colors sm:text-5xl">
          Welcome to RaffleLink
        </h1>
        <p className="max-w-md text-gray-600 transition-colors sm:text-lg">
          RaffleLink is the Ultimate platform for creating and sharing your very
          own raffle draws!
        </p>
        <button className="rounded-full bg-gray-800 px-10 py-2 font-medium text-white transition-colors hover:  bg-neutral-900  ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Splash;
