import React from "react";
import { ErrorIcon } from "../design/icons";

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
        <ErrorIcon class="icon-lg" />

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
