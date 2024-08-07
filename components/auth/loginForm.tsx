"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/shared/errorMessage";
import { Eye, Google } from "../design/icons";
import { ButtonLoader, ButtonLoaderWithBg } from "../design/loaders";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be at most 100 characters"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   router.prefetch("/register");
  // }, [router]);

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      //   TODO - USE TOAST TO DISPLAY MESSAGE
      setMessage(result.message);
      console.log("data: ", data);
      console.log("result: ", result);

      if (response.ok) {
        localStorage.setItem("token", result.token);
        // localStorage.setItem("token", data.token);
        setMessage("Login successful");
        setLoading(false);
        router.push("/raffle/new");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setMessage("An error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-24 duration-150 transition-all">
      <div className="w-full sm:w-[25rem] mx-auto bg-white/20 ring-4 ring-gray-900/5 rounded-lg border text-card-foreground shadow-sm max-w-sm">
        <div className="flex flex-col p-6 space-y-1.5">
          <h3 className="text-2xl font-cal leading-none tracking-tight">
            Login
          </h3>
          <p className="text-sm font-bdog text-muted-foreground">
            Log in to your RaffleLink account
          </p>
        </div>
        <div className="p-6 pt-0">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <input
                className={`custom flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  errors.email
                    ? "border-red-500 ring-2 ring-red-400 placeholder:text-red-400"
                    : "border-input"
                }`}
                type="email"
                placeholder="email"
                {...register("email")}
              />

              {errors.email && (
                <ErrorMessage
                  message={String(errors.email.message)}
                  className="h-7"
                />
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
              </label>
              <div className="relative">
                <input
                  className={`custom flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10 ${
                    errors.password
                      ? "border-red-500 ring-2 ring-red-400 placeholder:text-red-400"
                      : "border-input"
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                />

                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-[9px] right-2 cursor-pointer select-none"
                >
                  <div className="relative inline-flex items-center justify-center">
                    <>
                      <div
                        className={
                          "left-1/2 inline-flex items-center justify-center transition-all duration-200 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full w-[2px] -rotate-45 bg-black  absolute z-10 " +
                          (showPassword
                            ? "h-0 outline-none"
                            : "h-5 outline-2 outline outline-neutral-900/5")
                        }
                      />
                      <Eye class="flex-shrink-0" size={23} />
                    </>
                  </div>
                </span>
              </div>
              {errors.password && (
                <ErrorMessage
                  message={String(errors.password.message)}
                  className="h-7"
                />
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative h-10 flex items-center justify-center gap-2 w-full text-sm font-medium text-white bg-neutral-900 rounded-lg shadow-md transition-colors hover:bg-zinc-800 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-neutral-200"
            >
              {loading && <ButtonLoader />}
              <span className="ml-1">{loading ? "Loading..." : "Login"}</span>
            </button>
          </form>

          <button
            onClick={() => signIn("google")}
            className="h-10 mt-2 flex items-center justify-center gap-2 w-full text-sm text-white bg-neutral-900 rounded-lg shadow-md transition-colors hover:bg-zinc-800 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-neutral-200"
          >
            <Google />
            <span className="ml-1">Sign in with Google</span>
          </button>
        </div>

        <div className="flex items-center justify-between p-6 pt-0 font-bdog text-muted-foreground">
          <p className="text-sm">Dont have an account?</p>
          <Link
            data-prefetch="/register"
            href="/register"
            className="inline-flex items-center justify-center underline text-sm hover:text-neutral-900 hover:underline-offset-4"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
