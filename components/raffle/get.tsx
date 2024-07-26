"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ErrorMessage from "../shared/errorMessage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [raffleId, setRaffleId] = useState('');
  const [message, setMessage] = useState('');

  const joinRaffle  = async () => {
    setLoading(true);
    // Call API to join raffle
    const response = await fetch("/api/raffles/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      setJoined(true);
    } else {
      alert("Error joining raffle. Please try again.");
    }

    // try {
    //   const res = await fetch('/api/raffle/join', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ raffleId, name, email }),
    //   });
    //   const data = await res.json();
    //   setMessage(data.message);
    // } catch (error) {
    //   setMessage('Error joining raffle');
    // }
    setLoading(false);
  };

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (state === "name" && name) {
        setState("email");
      } else if (state === "email" && email) {
        handleEmailNext();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-black font-bdog">
      {state === "button" && (
        <motion.button
          onClick={() => setState("name")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-2 hover:ring-4 hover:ring-neutral-900/5 hover: shadow-md hover:rounded-md transition-all  text-white bg-neutral-900  rounded-md  shadow-black/5 hover:bg-zinc-800"
        >
          Join Raffle
        </motion.button>
      )}
      {state === "name" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
          onKeyPress={handleKeyPress}
        >
          <div className="flex justify-between gap-3 items-center">
            <motion.button
              onClick={() => setState("button")}
              className="p-2 bg-neutral-900 rounded-sm self-end"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeftIcon />
            </motion.button>

            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="mr-2">
                Name
              </Label>
              <Input
                type="text"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="custom"
              />
            </div>

            {name && (
              <motion.button
                onClick={() => setState("email")}
                className="p-2 bg-neutral-900 rounded-sm self-end"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRightIcon />
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

      {state === "email" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center mt-4 space-y-2"
          onKeyPress={handleKeyPress}
        >
          <div className="flex justify-between gap-3 items-center">
            <motion.button
              onClick={() => setState("name")}
              className="p-2 bg-neutral-900 rounded-sm  self-end"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeftIcon />
            </motion.button>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="mr-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="custom"
              />
            </div>
            {email && (
              <motion.button
                onClick={handleEmailNext}
                className="p-2 bg-neutral-900 rounded-sm self-end"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRightIcon />
              </motion.button>
            )}
          </div>
          {emailError && (
            <ErrorMessage message={emailError} className="w-auto py-1" />
          )}
        </motion.div>
      )}

      {state === "confirm" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center mt-4 space-y-2 gap-3"
        >
          <div className=" flex gap-4 justify-between items-center p-4 rounded-md bg-transparent  border text-muted-foreground shadow-sm ring-4 ring-gray-900/5 font-light font-bdog leading-none tracking-tight">
            <div className="flex flex-col gap-2 text-neutral-900">
              <p>Name:</p>
              <p>Email:</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="capitalize">{name}</p>
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
              onClick={joinRaffle }
              disabled={loading}
              className="px-4 py-2 text-white bg-neutral-900 rounded-sm font-bdog truncate overflow-hidden gap-2 font-medium group flex items-center justify-center shadow-md shadow-black/5 transition-all hover:bg-zinc-800 disabled:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {loading && (
                <>
                  <div className="w-4 h-4 border-2 border-white rounded-full animate-spin relative ml-2">
                    <div className="w-3 h-3 absolute bg-neutral-900 transition-colors group-hover:bg-zinc-800 z-10 top-1 left-1"></div>
                  </div>
                </>
              )}
              <span className="ml-1">
                {loading ? (
                  <span>
                    Joining
                    {/* Joining <span className="dot-pulse"></span> */}
                  </span>
                ) : (
                  "Join Raffle"
                )}
                {joined ? "You have already joined!" : ""}
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GetInTouch;

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
