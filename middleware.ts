import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // public routes
  // Routes that can be accessed while signed out

  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/api(.*)",
    "/_next/static(.*)",
    "/_next/image(.*)",
    "/favicon.ico",
    "/api/webhooks/clerk",
  ],
});

export const config = {
  // Protect only specific routes
  // Match all routes except API routes and Next.js internal routes
  matcher: ["/((?!_next|api).*)"],
};

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
// };
