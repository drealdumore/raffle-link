import React from 'react';

const RaffleCard = () => {
  return (
    <>
      <div className="mt-3">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid gap-y-2">
          <ul
            className="group/card-list w-full flex flex-col transition-[gap,opacity] min-w-0 gap-4"
            data-variant="loose"
          >
            <li className="w-full group/card border-gray-200 bg-white border rounded-xl transition-[filter] hover:[filter:drop-shadow(0_8px_12px_#222A350d)_drop-shadow(0_32px_80px_#2f30370f)]">
              <div className="w-full py-2.5 px-4 flex items-center gap-5 sm:gap-8 md:gap-12 text-sm">
                <div className="min-w-0 grow">
                  <div className="flex h-[32px] items-center gap-3 transition-[height] group-data-[variant=loose]/card-list:h-[60px]">
                    <div className="relative hidden shrink-0 items-center justify-center sm:flex">
                      <div className="absolute inset-0 shrink-0 rounded-full border border-gray-200 opacity-0 transition-opacity group-data-[variant=loose]/card-list:sm:opacity-100">
                        <div className="h-full w-full rounded-full border border-white bg-gradient-to-t from-gray-100"></div>
                      </div>
                      <div className="relative pr-0.5 transition-[padding] group-data-[variant=loose]/card-list:sm:p-2">
                        <img
                          alt="github.com"
                          draggable="false"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="blur-0 rounded-full h-4 w-4 shrink-0 transition-[width,height] sm:h-6 sm:w-6 group-data-[variant=loose]/card-list:sm:h-5 group-data-[variant=loose]/card-list:sm:w-5"
                          src="https://www.google.com/s2/favicons?sz=64&domain_url=github.com"
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </div>
                    <div className="h-[24px] min-w-0 overflow-hidden transition-[height] group-data-[variant=loose]/card-list:h-[44px]">
                      <div className="flex items-center gap-2">
                        <div className="min-w-0 shrink grow-0 text-gray-950">
                          <div className="flex items-center gap-2">
                            <a
                              href="https://dub.sh/RMu5P3j"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="dub.sh/RMu5P3j"
                              className="truncate font-semibold leading-6 text-gray-800 transition-colors hover:text-black"
                            >
                              dub.sh/RMu5P3j
                            </a>
                            <button className="relative group rounded-full transition-all duration-75 bg-transparent hover:bg-gray-100 active:bg-gray-200 p-1.5">
                              <span className="sr-only">Copy</span>
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
                            </button>
                          </div>
                        </div>
                        <div className="items-center whitespace-nowrap text-sm transition-[opacity,display] delay-[0s,150ms] duration-[150ms,0s] hidden gap-2.5 opacity-0 group-data-[variant=compact]/card-list:flex group-data-[variant=compact]/card-list:opacity-100 xs:min-w-[40px] xs:basis-[40px] min-w-0 shrink-0 grow basis-0 sm:min-w-[120px] sm:basis-[120px]">
                          <div className="flex min-w-0 items-center gap-1">
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
                            <a
                              href="https://github.com/flornkm/stickerimage"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="https://github.com/flornkm/stickerimage"
                              className="truncate text-gray-500 transition-colors hover:text-gray-700 hover:underline hover:underline-offset-2"
                            >
                              github.com/flornkm/stickerimage
                            </a>
                          </div>
                          <div className="hidden shrink-0 sm:block">
                            <div data-state="closed">
                              <img
                                alt="Avatar for Samuel Isah"
                                src="https://dubassets.com/avatars/clyw5b7q1000212d1dvcipmxl"
                                className="rounded-full border border-gray-300 h-4 w-4"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="hidden shrink-0 sm:block">
                            <span className="text-gray-400" data-state="closed">
                              Jul 23
                            </span>
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
                            href="https://github.com/flornkm/stickerimage"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="https://github.com/flornkm/stickerimage"
                            className="truncate text-gray-500 transition-colors hover:text-gray-700 hover:underline hover:underline-offset-2"
                          >
                            github.com/flornkm/stickerimage
                          </a>
                        </div>
                        <div className="hidden shrink-0 sm:block">
                          <div data-state="closed">
                            <img
                              alt="Avatar for Samuel Isah"
                              referrerPolicy="no-referrer"
                              src="https://dubassets.com/avatars/clyw5b7q1000212d1dvcipmxl"
                              className="rounded-full border border-gray-300 h-4 w-4"
                              draggable="false"
                            />
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:block">
                          <span className="text-gray-400" data-state="closed">
                            Jul 23
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 items-center whitespace-nowrap text-sm transition-[opacity,display] delay-[0s,150ms] duration-[150ms,0s] hidden gap-1.5 opacity-0 group-data-[variant=loose]/card-list:flex group-data-[variant=loose]/card-list:opacity-100 md:gap-3"></div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="rounded-xl bg-gray-100 px-2.5 py-1.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300 sm:px-3 sm:py-1.5">
                    Open
                  </button>
                  <div className="relative rounded-xl px-2.5 py-1.5 text-sm font-semibold text-gray-800 transition-colors sm:px-3 sm:py-1.5">
                    <button className="relative fex rounded-xl bg-gray-100 p-1 transition-all hover:bg-gray-200 active:bg-gray-300">
                      <span className="sr-only">Copy</span>
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
              <div className="w-full border-t border-gray-200 transition-[height] overflow-hidden group-data-[variant=loose]/card-list:h-[80px]"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RaffleCard;
