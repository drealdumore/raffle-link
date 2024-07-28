"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container sticky mx-3 flex max-w-5xl flex-col gap-3 px-4 py-2">
      <Link href="/">
        <div className="text-xl font-cal flex   gap-1 text-neutral-800">
          <LinkIcon />
          <p>RaffleLink.</p>
        </div>
      </Link>
      <p>2024</p>

      <p>
        Made with 📎 by{" "}
        <Link
          href="https://x.com/Drealdumore/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex underline"
        >
          Saint
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

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
