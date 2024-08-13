import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JoinButton = ({
  joined,
  loading,
}: {
  joined: boolean;
  loading?: boolean;
}) => {
  return (
    <>
      <motion.button
        className="p-2  rounded-sm flex justify-center items-center gap-2  hover:bg-zinc-800 disabled:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed  min-h-10 px-6 leading-none tracking-[0.0015rem] transition-[background-color,color] duration-500 ease-[cubic-bezier(.215,.61,.355,1)] overflow-hidden bg-neutral-900 text-gray-600 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatePresence>
          {joined ? (
            <motion.span
              key="joined"
              className="flex items-center gap-2 text-nowrap  text-white"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M20.322 4.18a1 1 0 0 1 .249 1.392l-9.75 14a1 1 0 0 1-1.528.135l-5.75-5.75a1 1 0 1 1 1.414-1.414l4.905 4.905 9.067-13.02a1 1 0 0 1 1.393-.249"
                  clipRule="evenodd"
                />
              </svg>
              You've joined the Raffle
            </motion.span>
          ) : (
            <motion.span
              key="join"
              className="text-nowrap text-white transition-opacity duration-500"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
            >
              Join Raffle
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default JoinButton;
