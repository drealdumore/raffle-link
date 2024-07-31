import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/app/utils/mongoConnect";
import User from "@/models/User";
import MongoDBAdapter from "@auth/mongodb-adapter";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials as any;
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const user = await res.json();

        // TODO -- FIX THIS AND USE THE if(!res.ok && !user) return null
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  // adapter: MongoDBAdapter(connectMongoDB),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await connectMongoDB();

      // Check if the user already exists in the database
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // If the user doesn't exist, create a new user
        const newUser = new User({
          username: user.name, // Or any other field you want to use for username
          email: user.email,
          password: "", // No password required for OAuth users, but the field cannot be empty
        });
        await newUser.save();
      }

      return true; // Return true to proceed with the sign-in
    },
    async session({ session, token }) {
      if (token && session)
        !{
          session,
          // session.user.id = token.sub,
        };
      return session;
    },
    
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
