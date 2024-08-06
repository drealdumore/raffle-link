"use client";

import Features from "@/components/home/features";
import Header from "@/components/home/header";

export default function Home() {
  // Prefetch()
  return (
    <div className="flex min-h-screen w-full flex-col space-y-6 p-4 md:p-8">
      <Header />
      <Features />
    </div>
  );
}
