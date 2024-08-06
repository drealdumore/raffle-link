"use client";

import RaffleCard from "@/components/profile/raffleCard";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

interface Raffle {
  title: string;
  desc: string;
  img: string;
  startDate: Date;
  endDate: Date;
  link: string;
}

const page = () => {
  const raffles: Raffle[] = [
    {
      title: "Summer Giveaway",
      desc: "Win a brand new laptop!",
      img: "https://example.com/laptop.jpg",
      startDate: new Date("2024-07-15"),
      endDate: new Date("2024-08-15"),
      link: "https://example.com/summer-giveaway",
    },
    {
      title: "Back to School Raffle",
      desc: "Win a set of school supplies!",
      img: "https://example.com/school-supplies.jpg",
      startDate: new Date("2024-07-20"),
      endDate: new Date("2024-09-01"),
      link: "https://example.com/back-to-school",
    },
    {
      title: "Birthday Bash",
      desc: "Win a gift card to your favorite store!",
      img: "https://example.com/gift-card.jpg",
      startDate: new Date("2024-07-25"),
      endDate: new Date("2024-08-01"),
      link: "https://example.com/birthday-bash",
    },
  ];

  const { data: session } = useSession();

  // TODO - GET THE URL AND ADD THE ID TO THE END
  // https://raffle-link.vercel.app/raffle/87748737383773

  return (
    <div>
      {/* user data:: name and stauts */}
      <article className="flex flex-col md:flex-row items-center gap-4  lg:h-2/6 h-2/5 max-lg:w-full max-lg:flex ">
        {session && (
          <>
            <article className="max-w-[130px] w-full flex-shrink-0 mb-10 ">
              <div className=" ring-4 ring-neutral-900/5 aspect-square rounded-full bg-blue-50"></div>
            </article>

            <div className="max-w-2xl">
              <div className="flex flex-col gap-1">
                <p className=" font-cal text-2xl">{session.user?.name}</p>
                <p className="text-base font-bdog">{session.user?.email}</p>

                <div className="flex items-center  gap-x-3 mb-4">
                  <p className="font-light text-base font-bdog items-center gap-2 flex">
                    Status:
                  </p>
                  <div className="flex items-center flex-row gap-x-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-auto w-7 bg-emerald-700"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </article>

      <div className="mx-auto w-full max-w-screen-xl  lg:px-20 grid gap-y-2">
        <div className="flex mb-4 flex-wrap items-center justify-between gap-2 md:flex-nowrap">
          <h1 className="order-1 text-2xl font-semibold tracking-tight text-black">
            Raffles
          </h1>
          

          <div className="order-3 flex gap-x-2">
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-gray-800 hover:ring-4 hover:ring-gray-200"
            >
              Create raffle
            </button>
          </div>
        </div>

        <div>
          <Link
            className="flex py-8 custom rounded-md px-2 items-center justify-center gap-1.5 border border-dashed border-gray-200 bg-surface-100 font-medium text-secondary outline-none focus-visible:ring-2 focus-visible:ring-gray-200 "
            href="/raffle/new"
            data-prefetch="/raffle/new"
          >
            <PlusSignIcon className="shrink-0 overflow-visible size-5" />
            Create raffle
          </Link>
        </div>

        <div className="mt-3">
          <div>
            <ul className="group/card-list w-full flex flex-col transition-[gap,opacity] min-w-0 gap-4">
              {raffles.map((raffle, i) => (
                <li key={i}>
                  <RaffleCard raffleData={raffle} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const PlusSignIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={16}
    height={16}
    color="currentColor"
    fill={"none"}
    {...props}
  >
    <path
      d="M12 4V20M20 12H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
