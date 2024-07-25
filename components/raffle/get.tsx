"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ErrorMessage from "../shared/errorMessage";

const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const GetInTouch = () => {
  const [state, setState] = useState<"button" | "name" | "email" | "confirm">(
    "button"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleEmailNext = () => {
    if (isValidEmail(email)) {
      setState("confirm");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-black">
      {state === "button" && (
        <motion.button
          onClick={() => setState("name")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-2 text-lg font-medium text-white bg-black rounded-md"
        >
          Get in Touch
        </motion.button>
      )}
      {state === "name" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center mt-4 space-x-2"
        >
          <motion.button
            onClick={() => setState("button")}
            className="p-2 bg-neutral-900 rounded-sm"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeftIcon />
          </motion.button>
          <label className="mr-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded"
          />
          {name && (
            <motion.button
              onClick={() => setState("email")}
              className="p-2 bg-neutral-900 rounded-sm"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowRightIcon />
            </motion.button>
          )}
        </motion.div>
      )}

      {state === "email" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center mt-4 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setState("name")}
              className="p-2 bg-neutral-900 rounded-sm"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeftIcon />
            </motion.button>
            <label className="mr-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="px-2 py-1 border border-gray-300 rounded"
            />
            {email && (
              <motion.button
                onClick={handleEmailNext}
                className="p-2 bg-neutral-900 rounded-sm"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRightIcon />
              </motion.button>
            )}
          </div>
          {emailError && (
            <ErrorMessage message={emailError} className="w-[80%] py-1" />
          )}
        </motion.div>
      )}

      {state === "confirm" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center mt-4 space-y-2"
        >
          <div className="flex gap-3">
            <div>
              <p>Name</p>
              <p>Name</p>
            </div>
            <div>
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <motion.button
              onClick={() => setState("email")}
              className="p-2 bg-neutral-900 rounded-sm"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeftIcon />
            </motion.button>
            <motion.button
              onClick={() => alert("Confirmed!")}
              className="px-4 py-2 text-white bg-black rounded"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Confirm
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GetInTouch;
