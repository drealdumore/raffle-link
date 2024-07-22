"use client";

import Features from "@/components/home/features";
import Header from "@/components/home/header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const getAll = async () => {
    try {
      const res = await fetch("/api/raffles", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("[raffles_GET]", error);
    }
  };

  getAll();

  return (
    <main className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
      <div className="flex min-h-screen w-full flex-col space-y-6 p-4 md:p-8">
        <Header />
        <Features />
      </div>
    </main>
  );
}
