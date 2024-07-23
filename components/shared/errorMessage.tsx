import React from "react";

interface Props {
  message: string;
  className?: string; 
}

const ErrorMessage: React.FC<Props> = ({ message, className }) => {
  return (
    <>
      <div
        className={` ${className} px-1 text-sm text-error border-[#f93a37]/20 bg-[#f93a37]/15 flex w-full items-center gap-2 rounded-md border bg-opacity-5`}
      >
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
          <div className="text-[#f10b0bc7]">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
