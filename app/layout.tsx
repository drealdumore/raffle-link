import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Nav from "../components/shared/nav";
import Footer from "@/components/shared/footer";
import Spinner from "@/components/shared/spinner";
import AuthProvider from "@/context/AuthProvider";
import { EdgeStoreProvider } from "./utils/edgestore";

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
    <html lang="en">
      <body
        className={`${calSans.variable} ${BDOG.variable}  ${inter.className}`}
      >
        <AuthProvider>
          <EdgeStoreProvider>
            <Nav />
            <main className="container mx-auto flex max-w-5xl items-center justify-center px-4 py-2">
              {children}
            </main>
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
