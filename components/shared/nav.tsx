import { auth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Nav = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <header className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
      <Link href="/">
        <div className="md:text-xl select-none font-cal flex justify-center gap-1 text-neutral-800">
          <LinkIcon />
          <p>RaffleLink.</p>
        </div>
      </Link>

      <nav className="flex gap-6">
        {!isAuth ? (
          <Link
            href="/sign-in"
            className="p-2 bg-neutral-900 rounded-md flex justify-center items-center gap-2 transition-all hover:bg-zinc-800 text-white"
          >
            Create Raffle
          </Link>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <Link href="/profile" className="hover:underline hover:underline-offset-2">Profile</Link>

            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-neutral-800"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
}
