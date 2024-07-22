import React from "react";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-12 bg-gradient-to-b from-[#131313] to-white/55 rounded-2xl p-10">
      <div className="space-y-2">
        <div className="flex flex-row items-center justify-center space-x-1">
          <span className="text-white/50 text-xs lg:text-base">
            HOW IT WORKS
          </span>
        </div>
        <div className="flex flex-row items-center text-center justify-center space-x-5">
          <h2 className="relative">
            Supafast,<span> Supaeasy</span>
            <img
              alt="scribble"
              loading="eager"
              width="280"
              height="50"
              decoding="async"
              data-nimg="1"
              className="absolute right-0 z-10 w-[100px] lg:w-[160px] xl:w-[280px]"
              src="/images/random-scribble.svg"
            />
          </h2>
          <img
            alt="scribble"
            loading="eager"
            width="50"
            height="50"
            decoding="async"
            data-nimg="1"
            className="w-[30px] lg:w-[50px] hidden md:flex"
            src="/images/smile-scribble.svg"
          />
        </div>
      </div>
      <div className="pt-10 lg:pt-20 flex flex-col space-y-16 lg:space-y-0 lg:flex-row items-center justify-center space-x-0">
        <div className="relative flex flex-col items-center text-center w-[300px] xl:w-[400px]">
          <img
            alt="Market Research"
            loading="eager"
            width="50"
            height="50"
            decoding="async"
            data-nimg="1"
            className="w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]"
            src="/images/1.svg"
          />
          <div className="absolute bottom-[-40px] left-0 right-0 flex flex-col items-center space-y-2 justify-center p-2">
            <span className="how-heading">Market Research</span>
            <span className="how-subheading">
              Dive deep into your market, understand your competition, and
              discover customer needs.
            </span>
          </div>
        </div>
        <img
          alt="arrow-scribble"
          loading="eager"
          width="50"
          height="50"
          decoding="async"
          data-nimg="1"
          className="rotate-90 lg:rotate-0"
          src="/images/arrow-scribble.svg"
        />
        <div className="relative flex flex-col items-center text-center w-[300px] xl:w-[400px]">
          <img
            alt="Copy & Design"
            loading="eager"
            width="50"
            height="50"
            decoding="async"
            data-nimg="1"
            className="w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]"
            src="/images/2.svg"
          />
          <div className="absolute bottom-[-40px] left-0 right-0 flex flex-col items-center space-y-2 justify-center p-2">
            <span className="how-heading">Copy &amp; Design</span>
            <span className="how-subheading">
              Develop compelling copy and visuals that make your brand and
              website stand out.
            </span>
          </div>
        </div>
        <img
          alt="arrow-scribble"
          loading="eager"
          width="50"
          height="50"
          decoding="async"
          data-nimg="1"
          className="rotate-90 lg:rotate-0"
          src="/images/arrow-scribble.svg"
        />
        <div className="relative flex flex-col items-center text-center w-[300px] xl:w-[400px]">
          <img
            alt="Launch & Scale"
            loading="eager"
            width="50"
            height="50"
            decoding="async"
            data-nimg="1"
            className="w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]"
            src="/images/3.svg"
          />
          <div className="absolute bottom-[-40px] left-0 right-0 flex flex-col items-center space-y-2 justify-center p-2">
            <span className="how-heading">Launch &amp; Scale</span>
            <span className="how-subheading">
              Get your site live and grow your business with ongoing support and
              optimization.
            </span>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center space-x-6 justify-center pt-10">
        <div className="flex flex-row items-center justify-center space-x-2">
          <span className="text-[#B2AEAE] text-xs lg:text-sm">
            Secured payments via Stripe
          </span>
          <img
            alt="logo"
            loading="eager"
            width="18"
            height="20"
            decoding="async"
            data-nimg="1"
            className="hidden md:flex"
            src="/images/logos/stripe.svg"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="text-white/50 w-3"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex flex-row items-center justify-center space-x-2">
          <span className="text-[#B2AEAE] text-xs lg:text-sm">
            Communication via Slack
          </span>
          <img
            alt="logo"
            loading="eager"
            width="18"
            height="20"
            decoding="async"
            data-nimg="1"
            className="hidden md:flex"
            src="/images/logos/slack.svg"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="text-white/50 w-3"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex flex-row items-center text-center justify-center space-x-2">
          <span className="text-[#B2AEAE] text-xs lg:text-sm">
            Delivered in Figma
          </span>
          <img
            alt="logo"
            loading="eager"
            width="14"
            height="20"
            decoding="async"
            data-nimg="1"
            className="hidden md:flex"
            src="/images/logos/figma.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
