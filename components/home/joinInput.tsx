import React from "react";

const JoinInput = () => {
  const searchAndRoute = () => {
    console.log("Search and route to the id");
  };

  return (
    <section className="mt-3 flex gap-x-4 gap-y-3 flex-col items-start w-full sm:items-center">
      <form className="relative w-full max-w-96" onSubmit={searchAndRoute}>
        <input
          className="placeholder:text-neutral-400 text-neutral-700 placeholder:font-light  w-full border appearance-none transition-all focus:bg-background bg-transparent text-secondary resize-none field-sizing-content font-medium outline-primary placeholder:text-inherit placeholder:opacity-50 disabled:opacity-50 px-4 py-3 text-sm/tight rounded-lg pr-28"
          type="text"
          placeholder="Enter Raffle ID"
          required
        />

        <button
          type="submit"
          className="group/button inline-flex items-center justify-center border font-medium hover:z-10 disabled:opacity-60 disabled:pointer-events-none border-transparent bg-blue-500 text-white hover:bg-blue-500/90 gap-[0.75ch] py-1.5 px-3 rounded-md absolute inset-y-1 right-1 text-sm/tight min-w-24"
          onClick={searchAndRoute}
        >
          <span className="truncate">Join Raffle</span>
        </button>
      </form>
    </section>
  );
};

export default JoinInput;
