"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import JoinInput from "./joinInput";
import Image from "next/image";

const Header = () => {
  const [join, setJoin] = useState(false);

  const handleJoinClick = () => setJoin(true);
  const cancelJoinClick = () => setJoin(false);

  return (
    <div className="mx-auto my-10 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
      {/* <h1 className="mt-5 font-cal text-white text-4xl font-extrabold leading-[1.15] sm:text-6xl sm:leading-[1.15] "> */}
      <h1 className="mt-5 font-cal  text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Create and Share Your Raffles
        <br />
        {/* <span className="bg-gradient-to-r from-white via-zinc-100 to-blue-500 bg-clip-text text-transparent"> */}
        <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-blue-500 bg-clip-text text-transparent">
          Effortlessly
        </span>
      </h1>
      <h2 className="mt-5 text-neutral-600 sm:text-xl font-bdog">
        RaffleLink is the ultimate platform for creating and sharing your very
        own raffle draws!
      </h2>
      {!join ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 50 }}
          transition={{ duration: 5 }}
          className="mx-auto mt-9 flex items-center justify-center"
        >
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
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5 }}
          className="mt-9 mx-auto flex gap-3 justify-center items-center"
        >
          <JoinInput />
          <div
            className="bg-blue-500 p-2 rounded-full cursor-pointer hover:ring-3 hover:rotate-90 transition-all ring-gray-900/5"
            onClick={cancelJoinClick}
          >
            <CancelIcon />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;

const CancelIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={"none"}
      color="#fff"
    >
      <path
        d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
