import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RaffleLink",
  description: "Create and Share Your Raffle Draws Effortlessly",
};

export default function RaffleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto my-16 flex max-w-xl flex-col items-center gap-4">
      {children}
    </div>
  );
}
