"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/shared/errorMessage";

const schema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be at most 100 characters"),
    passwordConfirm: z
      .string()
      .nonempty("Password confirmation is required")
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be at most 100 characters"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export default function Register() {
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
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      //   TODO - USE TOAST TO DISPLAY MESSAGE
      setMessage(result.message);

      if (response.ok) {
        setLoading(false);
        router.push("/login");
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
            Register
          </h3>
          <p className="text-sm font-bdog text-muted-foreground">
            Sign up for your RaffleLink account
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
                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  errors.email
                    ? "border-red-500 ring-2 ring-red-400"
                    : "border-input"
                }`}
                type="email"
                placeholder="Email"
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
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10 ${
                    errors.password
                      ? "border-red-500 ring-2 ring-red-400"
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
                          "left-1/2 inline-flex items-center justify-center transition-all duration-200 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full w-[2px] -rotate-45 bg-black dark:bg-white absolute z-10 " +
                          (showPassword
                            ? "h-0 outline-none"
                            : "h-5 outline-2 outline outline-neutral-100 dark:outline-neutral-800 dark:group-hover:outline-neutral-700 group-hover:outline-neutral-200")
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

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10 ${
                    errors.passwordConfirm
                      ? "border-red-500 ring-2 ring-red-400"
                      : "border-input"
                  }`}
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("passwordConfirm")}
                />
                <span
                  onClick={() => setShowPasswordConfirm((prev) => !prev)}
                  className="absolute top-[9px] right-2 cursor-pointer select-none"
                >
                  <div className="relative inline-flex items-center justify-center">
                    <>
                      <div
                        className={
                          "left-1/2 inline-flex items-center justify-center transition-all duration-200 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full w-[2px] -rotate-45 bg-black dark:bg-white absolute z-10 " +
                          (showPasswordConfirm
                            ? "h-0 outline-none"
                            : "h-5 outline-2 outline outline-neutral-100 dark:outline-neutral-800 dark:group-hover:outline-neutral-700 group-hover:outline-neutral-200")
                        }
                      />
                      <Eye class="flex-shrink-0" size={23} />
                    </>
                  </div>
                </span>
              </div>
              {errors.passwordConfirm && (
                <ErrorMessage
                  message={String(errors.passwordConfirm.message)}
                  className="h-7"
                />
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-10 flex items-center justify-center gap-2 w-full text-sm font-medium text-white bg-neutral-900 rounded-lg shadow-md transition-colors hover:bg-zinc-800 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-neutral-200"
            >
              {loading && (
                <div className="w-4 h-4 border-2 border-white rounded-full animate-spin relative ml-2">
                  <div className="w-3 h-3 absolute bg-neutral-900 transition-colors group-hover:bg-zinc-800 z-10 top-1 left-1"></div>
                </div>
              )}
              <span className="ml-1">
                {loading ? "Processing..." : "Register"}
              </span>
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
          <p className="text-sm">Already have an account?</p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center underline text-sm hover:text-neutral-900 hover:underline-offset-4"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

const Google = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 256 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);

function Eye(props: {
  size?: number;
  class?: string;
  stroke?: 2 | 1.5;
  onClick?: () => void;
  fill?: string;
}) {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      onClick={props.onClick}
      className={props.class}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12.0001L1.11178 11.5406C0.962741 11.8288 0.962741 12.1713 1.11178 12.4595L2 12.0001ZM22 11.9999L22.8882 12.4594C23.0373 12.1712 23.0373 11.8287 22.8882 11.5405L22 11.9999ZM2.88822 12.4595C5.16609 8.05547 8.65289 6.00002 12 6C15.3471 5.99998 18.8339 8.05537 21.1118 12.4594L22.8882 11.5405C20.3386 6.61119 16.2391 3.99997 12 4C7.76084 4.00003 3.66136 6.6113 1.11178 11.5406L2.88822 12.4595ZM1.11178 12.4595C3.66137 17.3888 7.76085 20 12 20C16.2392 20 20.3386 17.3887 22.8882 12.4594L21.1118 11.5405C18.8339 15.9445 15.3471 18 12 18C8.65288 18 5.16609 15.9446 2.88822 11.5406L1.11178 12.4595ZM14 12C14 13.1046 13.1046 14 12 14V16C14.2091 16 16 14.2091 16 12H14ZM12 14C10.8954 14 10 13.1046 10 12H8C8 14.2091 9.79086 16 12 16V14ZM10 12C10 10.8954 10.8954 10 12 10V8C9.79086 8 8 9.79086 8 12H10ZM12 10C13.1046 10 14 10.8954 14 12H16C16 9.79086 14.2091 8 12 8V10Z"
        fill="currentColor"
      />
    </svg>
  );
}
