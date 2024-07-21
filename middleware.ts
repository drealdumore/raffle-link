import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();


// authenticate all pages
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
