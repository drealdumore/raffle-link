"use client";

import React, { useState } from "react";
import ErrorMessage from "../shared/errorMessage";

const SearchInput = () => {
  const [loading, setLoading] = useState(false);
  const [raffleId, setRaffleId] = useState("");
  const [searchError, setSearchError] = useState("");

  const searchAndRoute = () => {
    console.log("Search and route to the id");
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setSearchError("");

    // setRaffleId("66a004263f9646a15a7c6ee4");

    console.log(raffleId);

    try {
      const response = await fetch(`/api/raffles/${raffleId}`, {
        method: "GET",
      });

      if (!response.ok) {
        setSearchError("raffle with that id does not exist");
        throw new Error("Failed to GET raffle");
      }
      //TODO - FIX THE SEARCH SO THAT AFTER Searching, it routes

      // if res = 'ok', route to the raffle page

      const result = await response.json();
      console.log("Raffle gotten successfully:", result);
    } catch (error) {
      console.error("Error finding raffle:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex w-auto sm:items-center flex-col gap-2">
      <form
        className="relative w-full max-w-96 ring-4 ring-gray-900/5 rounded-lg"
        onSubmit={handleSearch}
      >
        <input
          className="placeholder:text-neutral-800  placeholder:font-light  w-full border appearance-none transition-all focus:bg-gray-900/5 bg-transparent text-secondary resize-none font-medium outline-none  focus:border-blue-200/90 placeholder:text-inherit placeholder:opacity-50 disabled:opacity-50 px-4 py-3 text-sm/tight rounded-lg pr-28"
          type="text"
          style={{ color: "black" }}
          placeholder="Enter Raffle ID"
          required
          onChange={(e) => setRaffleId(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="group/button inline-flex items-center justify-center border font-medium hover:z-10 disabled:opacity-60 disabled:pointer-events-none border-transparent transition-all text-neutral-500 disabled:text-neutral-800 bg-white hover:bg-blue-500/90 hover:text-white gap-[0.75ch] py-1.5 px-3 rounded-md absolute inset-y-1 right-1 text-sm/tight min-w-24"
          onClick={searchAndRoute}
        >
          <span className="ml-1 truncate">
            {loading ? (
              <span>
                Searching<span className="dot-pulse"></span>
              </span>
            ) : (
              "Join Raffle"
            )}
          </span>
        </button>
      </form>

      {searchError && (
        <ErrorMessage message={searchError} className="w-auto py-2" />
      )}
    </section>
  );
};

export default SearchInput;
