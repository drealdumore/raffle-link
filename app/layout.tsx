import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Nav from "../components/shared/nav";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

const calSans = localFont({
  src: ".././public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calSans",
});

const BDOG = localFont({
  src: ".././public/fonts/BDOGrotesk-VF.woff2",
  variable: "--font-bdog",
});

export const metadata: Metadata = {
  title: "RaffleLink",
  description: "Create and Share Your Raffle Draws Effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${calSans.variable} ${BDOG.variable}  ${inter.className}`}
        >
          <ClerkLoading>
            <div className="flex flex-col items-center text-center mt-32">
              LOADING...
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <Nav />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
