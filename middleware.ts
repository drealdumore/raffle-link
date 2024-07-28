import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/', '/api(.*)', '/_next/static(.*)', '/_next/image(.*)', '/favicon.ico'],
});

export const config = {
  // Protect only specific routes
  matcher: ['/raffle/new', '/profile'],
};


// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   // Routes that can be accessed while signed out
//   publicRoutes: ['/'],
//   // Routes that can always be accessed, and have
//   // no authentication information
// //   ignoredRoutes: ['/no-auth-in-this-route'],
// });

// export const config = {
//   // Protects all routes, including api/trpc.
//   // See https://clerk.com/docs/references/nextjs/auth-middleware
//   // for more information about configuring your Middleware
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   // Routes that can be accessed while signed out
//   publicRoutes: ['/'],
//   // Routes that can always be accessed, and have no authentication information
//   // ignoredRoutes: ['/no-auth-in-this-route'],
// });

// export const config = {
//   // Protect all routes except those matching the following patterns:
//   matcher: [
//     "/((?!api/.*|_next/static|_next/image|favicon.ico).*)", // Protect all routes except API and some static files
//     "/", // Protect the root path
//   ],
// };
