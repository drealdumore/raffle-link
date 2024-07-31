import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RaffleLink - User Profile ",
  description: "Create and Share Your Raffle Draws Effortlessly",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto my-16 h-screen flex max-w-xl flex-col gap-4">
      {children}
    </div>
  );
}



// TODO - ADD USER PROFILE TAG ON HEADER WHEN USER LOGS IN