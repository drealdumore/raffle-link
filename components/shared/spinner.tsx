import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex h-[50vh] w-full items-center justify-center text-tertiary">
        <div className="relative isolate  [--spinner-thumb-animation-duration:1s] [--spinner-stroke:1] [--spinner-dots-stroke-dasharray:0_3.315] size-20">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="motion-safe:origin-[--spinner-origin] motion-safe:will-change-transform motion-safe:animate-spin motion-safe:[animation-direction:reverse] motion-safe:[animation-duration:12s]"
              fill="currentColor"
              opacity="0.5"
            >
              <circle cx="8" cy="2.75" r="0.5"></circle>
              <circle cx="8" cy="13.25" r="0.5"></circle>
              <circle cx="3.01001" cy="6.35999" r="0.5"></circle>
              <circle cx="12.98" cy="6.35999" r="0.5"></circle>
              <circle cx="3.01001" cy="9.62" r="0.5"></circle>
              <circle cx="12.99" cy="9.62" r="0.5"></circle>
              <circle cx="4.91998" cy="3.75" r="0.5"></circle>
              <circle cx="11.08" cy="3.75" r="0.5"></circle>
              <circle cx="4.91998" cy="12.25" r="0.5"></circle>
              <circle cx="11.08" cy="12.25" r="0.5"></circle>
            </g>
            <circle
              className="motion-safe:origin-[--spinner-origin] motion-safe:will-change-transform motion-safe:animate-spin motion-safe:[animation-duration:--spinner-thumb-animation-duration]"
              cx="8"
              cy="8"
              r="5.25"
              pathLength="360"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dashoffset="100"
              stroke-dasharray="90 270"
              stroke-width="var(--spinner-stroke,1.5)"
            ></circle>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Spinner;
