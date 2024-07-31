"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful");
        setLoading(false);
        router.push("/raffle.new");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <>
      <div>
        {!session ? (
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        ) : (
          <div>
            <p>Signed in as {session.user?.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        )}
      </div>

      <div className=" flex flex-col gap-4 items-center justify-center p-24">
        <div className="md:w-full mx-auto w-[95%] bg-white/20 ring-4 ring-gray-900/5 rounded-lg border text-card-foreground shadow-sm max-w-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-cal leading-none tracking-tight">
              Login
            </h3>
            <p className="text-sm  font-bdog text-muted-foreground">
              Log in to your RaffleLink account
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
                <span className="ml-1">{loading ? "Loading..." : "Login"}</span>
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
            <p className="text-sm">Dont have an account?</p>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-neutral-900/5 hover:bg-neutral-900/10 h-8 rounded-sm px-3"
              href="/register"
            >
              Sign up
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
