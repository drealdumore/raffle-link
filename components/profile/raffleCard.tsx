import Image from "next/image";
import React from "react";

interface Raffle {
  title: string;
  desc: string;
  img: string;
  startDate: Date;
  endDate: Date;
  link: string;
}

const RaffleCard = ({ raffleData }: { raffleData: Raffle }) => {
  return (
    <>
      <div className="w-full group/card custom border rounded-xl transition-[filter] hover:[filter:drop-shadow(0_8px_12px_#222A350d)_drop-shadow(0_32px_80px_#2f30370f)]">
        <div className="w-full py-2.5 px-4 flex items-center gap-5 sm:gap-8 md:gap-12 text-sm">
          <div className="min-w-0 grow">
            <div className="flex h-[32px] items-center gap-3 transition-[height] group-data-[variant=loose]/card-list:h-[60px]">
              <div className="relative hidden shrink-0 items-center justify-center sm:flex">
                <div className="absolute inset-0 shrink-0 rounded-full border border-gray-200 opacity-0 transition-opacity group-data-[variant=loose]/card-list:sm:opacity-100">
                  <div className="h-full w-full rounded-full border border-white bg-gradient-to-t from-gray-100"></div>
                </div>
                <div className="relative pr-0.5 transition-[padding] group-data-[variant=loose]/card-list:sm:p-2">
                  <Image
                    alt="icon"
                    draggable="false"
                    loading="lazy"
                    width="30"
                    height="30"
                    decoding="async"
                    data-nimg="1"
                    className="blur-0 rounded-full h-4 w-4 shrink-0 transition-[width,height] sm:h-6 sm:w-6 group-data-[variant=loose]/card-list:sm:h-5 group-data-[variant=loose]/card-list:sm:w-5"
                    src={raffleData.img ? raffleData.img : "/assets/bio.jpg"}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="h-[24px] min-w-0 overflow-hidden transition-[height] group-data-[variant=loose]/card-list:h-[44px]">
                <div className="flex items-center gap-2">
                  <div className="min-w-0 shrink grow-0 text-gray-950">
                    <div className="flex items-center gap-2">
                      <a
                        href={raffleData.link}
                        title={raffleData.link}
                        className="truncate font-semibold leading-6  transition-colors hover:text-black"
                      >
                        {raffleData.title}
                      </a>
                      <button className="relative group rounded-full transition-all duration-75 bg-transparent hover:bg-gray-100 active:bg-gray-200 p-1.5">
                        <span className="sr-only">Copy</span>
                        <CopyIcon />
                      </button>
                    </div>
                  </div>
                  <div className="items-center whitespace-nowrap text-sm transition-[opacity,display] delay-[0s,150ms] duration-[150ms,0s] hidden gap-2.5 opacity-0 group-data-[variant=compact]/card-list:flex group-data-[variant=compact]/card-list:opacity-100 xs:min-w-[40px] xs:basis-[40px] min-w-0 shrink-0 grow basis-0 sm:min-w-[120px] sm:basis-[120px]">
                    <div className="flex min-w-0 items-center gap-1">
                      <LinkIcon />
                      <a
                        href={raffleData.link}
                        title={raffleData.link}
                        className="truncate text-gray-500 transition-colors hover:text-gray-700 hover:underline hover:underline-offset-2"
                      >
                        {raffleData.link}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 items-center whitespace-nowrap text-sm transition-[opacity,display] delay-[0s,150ms] duration-[150ms,0s] hidden gap-1.5 opacity-0 group-data-[variant=loose]/card-list:flex group-data-[variant=loose]/card-list:opacity-100 md:gap-3">
                  <div className="flex min-w-0 items-center gap-1">
                    <svg
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 shrink-0 text-gray-400"
                    >
                      <g fill="currentColor">
                        <path
                          d="M15.25,9.75H4.75c-1.105,0-2-.895-2-2V3.75"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        ></path>
                        <polyline
                          fill="none"
                          points="11 5.5 15.25 9.75 11 14"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        ></polyline>
                      </g>
                    </svg>
                    <a
                      href={raffleData.link}
                      target="_blank"
                      title={raffleData.link}
                      className="truncate text-gray-500 transition-colors hover:text-gray-700 hover:underline hover:underline-offset-2"
                    >
                      {raffleData.link}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-0 items-center whitespace-nowrap text-sm transition-[opacity,display] delay-[0s,150ms] duration-[150ms,0s] hidden gap-1.5 opacity-0 group-data-[variant=loose]/card-list:flex group-data-[variant=loose]/card-list:opacity-100 md:gap-3"></div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* open ::: route to route detail */}
            <button className="rounded-xl bg-neutral-900/5 px-2.5 py-1.5 text-sm font-semibold  transition-colors hover:bg-neutral-900/10 active:bg-neutral-300 sm:px-3 sm:py-1.5">
              Open
            </button>

            {/* big copy icon */}
            <div className="relative rounded-xl px-2.5 py-1.5 text-sm font-semibold  transition-colors sm:px-3 sm:py-1.5">
              <button className="relative fex rounded-xl bg-neutral-900/5 p-1 transition-all hover:bg-neutral-900/10 active:bg-neutral-300">
                <svg
                  fill="none"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="h-5 w-5"
                >
                  <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <article className="group  border custom relative isolate flex flex-col rounded-xl bg-surface-100 p-sm pb-0">
        <div className="flex flex-1 flex-col justify-between rounded-lg border px-4 py-3">
          <div className="absolute inset-x-14 top-1 h-xs rounded-b-full"></div>
          <div className="flex items-center justify-between gap-3">
            <div className="relative hidden shrink-0 items-center justify-center sm:flex">
              <div className="absolute inset-0 shrink-0 rounded-full border border-gray-200 opacity-0 transition-opacity group-data-[variant=loose]/card-list:sm:opacity-100">
                <div className="h-full w-full rounded-full border border-white bg-gradient-to-t from-gray-100"></div>
              </div>
              <div className="relative pr-0.5 transition-[padding] group-data-[variant=loose]/card-list:sm:p-2">
                <Image
                  alt="icon"
                  draggable="false"
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                  className="blur-0 rounded-full h-4 w-4 shrink-0 transition-[width,height] sm:h-6 sm:w-6 group-data-[variant=loose]/card-list:sm:h-5 group-data-[variant=loose]/card-list:sm:w-5"
                  src={raffleData.img ? raffleData.img : "/assets/bio.jpg"}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="truncate font-mono text-xs text-secondary">
              {raffleData.link}
            </div>
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="font-medium">
                <a
                  className="line-clamp-3 outline-none after:absolute after:inset-0 after:z-1 after:rounded-xl focus-visible:text-purple focus-visible:after:ring-2 focus-visible:after:ring-gray-200 dark:focus-visible:after:ring-gray-700"
                  href="/apps/app_2jexKHoVvUdJoQSXeqXL94Om1ec/instances/ins_2jexKTk8jADrf6DXh4zl9m5qKf1"
                >
                  {raffleData.title}
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between overflow-hidden px-3 py-2 text-xs font-book text-secondary">
          <span className="transition ease-[cubic-bezier(0.2,0.4,0,1)] group-hover:-translate-x-[calc(100%+theme(spacing.4))] group-has-[a:focus-visible]:-translate-x-[calc(100%+theme(spacing.4))] motion-reduce:duration-0">
            Created <time>6 days ago</time>
          </span>
          <span className="flex translate-x-[calc(100%+theme(spacing.4))] items-center gap-1 text-primary transition ease-[cubic-bezier(0.2,0.4,0,1)] group-hover:translate-x-0 group-has-[a:focus-visible]:translate-x-0 motion-reduce:duration-0">
            Go to raffle{" "}
            <svg
              fill="none"
              fill-opacity="10"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="shrink-0 overflow-visible stroke-[1.25] size-4"
              aria-hidden="true"
              data-icon=""
              data-size="sm"
              viewBox="0 0 20 20"
            >
              <use href="#clerk-ui-icon__arrow-right-legacy"></use>
            </svg>
          </span>
        </div>
      </article> */}
    </>
  );
};

export default RaffleCard;

const CopyIcon = () => {
  return (
    <svg
      fill="none"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      className="h-3.5 w-3.5"
    >
      <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
    </svg>
  );
};

const LinkIcon = () => {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1 h-3 w-3 shrink-0 text-gray-400"
    >
      <g fill="currentColor">
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          x1="15.25"
          x2="2.75"
          y1="9"
          y2="9"
        ></line>
        <polyline
          fill="none"
          points="11 4.75 15.25 9 11 13.25"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></polyline>
      </g>
    </svg>
  );
};
