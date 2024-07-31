import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_IP!
    : process.env.DATABASE_LOCAL_IP!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectMongoDB = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "RaffleLink",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
