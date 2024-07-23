import React from "react";

const JoinInput = () => {
  const searchAndRoute = () => {
    console.log("Search and route to the id");
  };

  return (
    <section className="flex w-auto sm:items-center">
      <form
        className="relative w-full max-w-96 ring-4 ring-gray-900/5 rounded-lg"
        onSubmit={searchAndRoute}
      >
        <input
          className="placeholder:text-neutral-800  placeholder:font-light  w-full border appearance-none transition-all focus:bg-gray-900/5 bg-transparent text-secondary resize-none font-medium outline-primary placeholder:text-inherit placeholder:opacity-50 disabled:opacity-50 px-4 py-3 text-sm/tight rounded-lg pr-28"
          type="text"
          style={{ color: "black" }}
          placeholder="Enter Raffle ID"
          required
        />

        <button
          type="submit"
          className="group/button inline-flex items-center justify-center border font-medium hover:z-10 disabled:opacity-60 disabled:pointer-events-none border-transparent transition-all text-neutral-500 bg-white hover:bg-blue-500/90 hover:text-white gap-[0.75ch] py-1.5 px-3 rounded-md absolute inset-y-1 right-1 text-sm/tight min-w-24"
          onClick={searchAndRoute}
        >
          <span className="truncate">Join Raffle</span>
        </button>
      </form>
    </section>
  );
};

export default JoinInput;
