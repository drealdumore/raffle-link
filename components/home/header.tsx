// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import JoinInput from "./joinInput";

// const Header = () => {
//   const [join, setJoin] = useState(false);

//   const handleJoinClick = () => {
//     setJoin(true);
//   };

//   return (
//     <div className="mx-auto my-10 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
//       <h1 className="mt-5 font-cal text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
//         Create and Share Your Raffles
//         <br />
//         <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-blue-500 bg-clip-text text-transparent">
//           Effortlessly
//         </span>
//       </h1>
//       <h2 className="mt-5 text-neutral-600 sm:text-xl">
//         RaffleLink is the Ultimate platform for creating and sharing your very
//         own raffle draws!
//       </h2>
//       <div className="mx-auto mt-5 flex max-w-fit space-x-4">
//         <Link
//           target="_blank"
//           className="rounded-lg  mx-auto max-w-fit border px-6 py-3 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-neutral-200 disabled:bg-blue-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-neutral-200  bg-blue-500 text-white hover:bg-blue-600"
//           href="#"
//         >
//           Create Raffle
//         </Link>
//         <Link
//           className="rounded-lg duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:tranneutral-y-1 active:scale-x-110 active:scale-y-90 mx-auto max-w-fit border px-6 py-3 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-blue-100 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-neutral-200 border-neutral-200 bg-white  hover:text-blue-300 text-neutral-500"
//           href="#"
//         >
//           Join a Raffle
//         </Link>
//       </div>

//       <div>
//         <JoinInput />
//       </div>
//     </div>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import JoinInput from "./joinInput";
import Image from "next/image";

const Header = () => {
  const [join, setJoin] = useState(false);

  const handleJoinClick = () => {
    setJoin(true);
  };

  return (
    <div className="mx-auto my-10 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
      <h1 className="mt-5 font-cal text-white text-4xl font-extrabold leading-[1.15] sm:text-6xl sm:leading-[1.15] ">
      {/* <h1 className="mt-5 font-cal  text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]"> */}
        Create and Share Your Raffles
        <br />
        <span className="bg-gradient-to-r from-white via-zinc-100 to-blue-500 bg-clip-text text-transparent">
        {/* <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-blue-500 bg-clip-text text-transparent"> */}
          Effortlessly
        </span>
      </h1>
      <h2 className="mt-5 text-neutral-600 sm:text-xl font-bdog">
        RaffleLink is the ultimate platform for creating and sharing your very
        own raffle draws!
      </h2>
      {!join ? (
        <div className="mx-auto mt-5 flex max-w-fit space-x-4">
          <Link
            className="rounded-lg mx-auto max-w-fit border px-6 py-3 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-neutral-200 disabled:bg-blue-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-neutral-200 bg-blue-500 text-white hover:bg-blue-600"
            href="/raffle/new"
          >
            Create Raffle
          </Link>
          <button
            className="rounded-lg duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:transform active:scale-x-110 active:scale-y-90 mx-auto max-w-fit border px-6 py-3 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-blue-100 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-neutral-200 border-neutral-200 bg-white hover:text-blue-300 text-neutral-500"
            onClick={handleJoinClick}
          >
            Join a Raffle
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="mt-5"
        >
          <JoinInput />
        </motion.div>
      )}
    </div>
  );
};

export default Header;
