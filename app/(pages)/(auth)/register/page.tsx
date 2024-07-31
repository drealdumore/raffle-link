"use client";
import { signIn } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, passwordConfirm }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setLoading(false);

        router.push("/login");
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <>
      <div className=" flex flex-col gap-4 items-center justify-center p-24">
        <div className="md:w-full mx-auto w-[95%] bg-white/20 ring-4 ring-gray-900/5 rounded-lg border text-card-foreground shadow-sm max-w-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-cal leading-none tracking-tight">
              Register
            </h3>
            <p className="text-sm  font-bdog text-muted-foreground">
              Sign up for your RaffleLink account
            </p>
          </div>
          <div className="p-6 pt-0">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                  {/* if error: text-destructive */}
                  Email
                </label>
                <input
                  className="flex custom h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="flex custom h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    // TODO - FIX THIS ICON CHANGE METHOD IT DOES NOT CHANGE
                    onClick={(prevState) => setShowPassword(!prevState)}
                    className="absolute top-[7px] right-1 cursor-pointer select-none"
                  >
                    {showPassword ? <OpenEye /> : <CloseEye />}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="flex custom h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    placeholder="••••••••"
                    type={showPasswordConfirm ? "text" : "password"}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                  />
                  <span
                    // TODO - FIX THIS ICON CHANGE METHOD IT DOES NOT CHANGE
                    onClick={(prevState) => setShowPasswordConfirm(!prevState)}
                    className="absolute top-[7px] right-1 cursor-pointer select-none"
                  >
                    {showPasswordConfirm ? <OpenEye /> : <CloseEye />}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-10 font-bdog truncate overflow-hidden w-full gap-2 font-medium group flex items-center justify-center   bg-neutral-900   text-white shadow-md shadow-black/5 transition-colors hover:bg-zinc-800 rounded-lg  disabled:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed "
              >
                {loading && (
                  <>
                    <div className="w-4 h-4 border-2 border-white rounded-full animate-spin relative ml-2">
                      <div className="w-3 h-3 absolute   bg-neutral-900   transition-colors group-hover:bg-zinc-800 z-10 top-1 left-1"></div>
                    </div>
                  </>
                )}
                <span className="ml-1">
                  {loading ? "Processing..." : "Register"}
                </span>
              </button>
            </form>

            <button
              onClick={() => signIn("google")}
              className="h-10  mt-2 font-bdog truncate overflow-hidden w-full gap-2 font-medium group flex items-center justify-center   bg-neutral-900   text-white shadow-md shadow-black/5 transition-colors hover:bg-zinc-800 rounded-lg  disabled:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed "
            >
              <div className="w-4 h-4 border-2 border-white rounded-full animate-spin relative ml-2">
                <div className="w-3 h-3 absolute   bg-neutral-900   transition-colors group-hover:bg-zinc-800 z-10 top-1 left-1"></div>
              </div>
              <span className="ml-1">Sign in with google</span>
            </button>
          </div>

          <div className="flex font-bdog text-muted-foreground items-center p-6 pt-0 justify-between">
            <p className="text-sm">Already have an account?</p>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-neutral-900/5 hover:bg-neutral-900/10 h-8 rounded-sm px-3"
              href="/login"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function OpenEye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function CloseEye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
      <line x1="2" x2="22" y1="2" y2="22"></line>
    </svg>
  );
}
