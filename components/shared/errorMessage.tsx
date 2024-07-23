import React from "react";

const ErrorMessage  = ({ message }: { message: string }) => {
  return (
    <>
      <div className="text-sm text-error border-[#f93a37]/20 bg-[#f93a37]/15 flex w-full items-start gap-2 rounded-md border p-1 bg-opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="icon-lg"
        >
          <path
            fill="currentColor"
            d="M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM12 9.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5"
          ></path>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="pt-px">
          <div className="text-white">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage ;
