import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="flex flex-col gap-6 justify-center mt-7">
      <div className="flex justify-center items-center mb-4">
        <h2 className="font-cal text-5xl font-bold relative">
          Features
          <Image
            alt="scribble"
            loading="eager"
            width="480"
            height="150"
            className="absolute right-0 z-10 w-[100px] lg:w-[160px] xl:w-[280px]"
            src="/assets/random-scribble.svg"
          />
        </h2>
      </div>

      <ul className="grid lg:grid-cols-2 gap-y-16 gap-x-8 xl:gap-x-16">
        <li className="group w-full relative grid grid-cols-auto-span items-start gap-8 text-left">
          <div className="flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-emerald-500/30 from-green-300/50 to-emerald-300/50 text-emerald-500 ring-emerald-500/35">
            <TagIcon />
          </div>
          <div>
            <h2 className="font-cal text-lg md:text-xl text-navy">
              Create Raffles with Ease
            </h2>
            <p className="mt-2 text-base">
              Set up your raffle in minutes with a simple and intuitive
              interface. Provide a title, description, and choose whether it's
              free or paid to enter.
            </p>
          </div>
        </li>

        <li className="group w-full relative grid grid-cols-auto-span items-start gap-8 text-left">
          <div className="flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-blue-500/30 from-sky-300/50 to-blue-300/50 text-blue-500 ring-blue-500/30">
            <LinkIcon />
          </div>
          <div>
            <h2 className="font-cal text-lg md:text-xl text-navy">
              Customizable Links
            </h2>
            <p className="mt-2 text-base">
              Generate a unique link for each raffle draw. Share this link on
              your social media, website, or anywhere else to invite
              participants.
            </p>
          </div>
        </li>

        <li className="group w-full relative grid grid-cols-auto-span items-start gap-8 text-left">
          <div className="flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-orange-500/30 from-orange-200/50 to-orange-500/40 text-orange-500 ring-orange-500/35">
            <QRIcon />
          </div>
          <div>
            <h2 className="font-cal text-lg md:text-xl text-navy">
              Flexible Payment Options:
            </h2>
            <p className="mt-2 text-base">
              Accept payments securely through Paystack and Stripe. Choose the
              payment option that works best for you and your participants.
            </p>
          </div>
        </li>

        <li className="group w-full relative grid grid-cols-auto-span items-start gap-8 text-left">
          <div className="flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-amber-500/30 from-yellow-200/75 to-orange-200/75 text-amber-500 ring-amber-400/60">
            <HappyIcon />
          </div>
          <div>
            <h2 className="font-cal text-lg md:text-xl text-navy">
              Engaging Experience
            </h2>
            <p className="mt-2 text-base">
              Make your raffles exciting with customizable entry options,
              detailed descriptions, and more.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Features;

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events: none; width: 24px; height: 24px; "
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
      <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
      <line x1="8" x2="16" y1="12" y2="12"></line>
    </svg>
  );
}

function QRIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events: none; width: 24px; height: 24px; "
    >
      <rect width="5" height="5" x="3" y="3" rx="1"></rect>
      <rect width="5" height="5" x="16" y="3" rx="1"></rect>
      <rect width="5" height="5" x="3" y="16" rx="1"></rect>
      <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
      <path d="M21 21v.01"></path>
      <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
      <path d="M3 12h.01"></path>
      <path d="M12 3h.01"></path>
      <path d="M12 16v.01"></path>
      <path d="M16 12h1"></path>
      <path d="M21 12v.01"></path>
      <path d="M12 21v-1"></path>
    </svg>
  );
}

function CreateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={"none"}
      className="pointer-events: none; width: 24px; height: 24px; "
    >
      <path
        d="M22 12.6344C18 16.1465 17.4279 10.621 15.3496 11.0165C13 11.4637 11.5 16.4445 13 16.4445C14.5 16.4445 12.5 10.5 10.5 12.5556C8.5 14.6111 7.85936 17.2946 6.23526 15.3025C-1.5 5.81446 4.99998 -1.14994 8.16322 3.45685C10.1653 6.37256 6.5 16.9769 2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      className="pointer-events: none; width: 24px; height: 24px; "
      fill={"none"}
    >
      <path
        d="M17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.247 11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16.8538 7.43306C16.8538 8.24714 16.1901 8.90709 15.3714 8.90709C14.5527 8.90709 13.889 8.24714 13.889 7.43306C13.889 6.61898 14.5527 5.95904 15.3714 5.95904C16.1901 5.95904 16.8538 6.61898 16.8538 7.43306Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 20.9463L11.0477 21.2056C8.35403 21.9391 7.00722 22.3059 5.94619 21.6833C4.88517 21.0608 4.52429 19.6921 3.80253 16.9547L2.78182 13.0834C2.06006 10.346 1.69918 8.97731 2.31177 7.89904C2.84167 6.96631 4 7.00027 5.5 7.00015"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HappyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      className="pointer-events: none; width: 24px; height: 24px; "
      fill={"none"}
    >
      <path
        d="M3.07818 7.5C2.38865 8.85588 2 10.39 2 12.0148C2 17.5295 6.47715 22 12 22C17.5228 22 22 17.5295 22 12.0148C22 10.39 21.6114 8.85588 20.9218 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="12"
        cy="4"
        rx="10"
        ry="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.5C7 9.67154 7.67157 8.99997 8.5 8.99997C9.32843 8.99997 10 9.67154 10 10.5M14 10.4999C14 9.67151 14.6716 8.99994 15.5 8.99994C16.3284 8.99994 17 9.67151 17 10.4999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
