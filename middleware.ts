// // Without a defined matcher, this one line applies next-auth
// // to the entire project
// export { default } from "next-auth/middleware";

// // Applies next-auth only to matching routes - can be regex
// // Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { matcher: ["/profile"] };
// // TODO - UPDATE LATER AFTER MONGODB IS BACK
// // export const config = { matcher: ["/raffle/new", "/profile"] };

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req: any) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { message: "Authentication token missing" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

export const config = {
  matcher: ["/raffle/new", "/profile"],
  //   matcher: "/profile",
};
