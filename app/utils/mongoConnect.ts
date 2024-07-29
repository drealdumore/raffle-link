// import mongoose from "mongoose";
// let isConnected: boolean = false;

// export const connectMongoDB = async (): Promise<void> => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.DATABASE_IP!);
//     // await mongoose.connect(process.env.DATABASE_LOCAL_IP!);

//     isConnected = true;
//     console.log("MongoDB is connected");
//   } catch (err) {
//     console.log(err);
//   }
// };

import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.DATABASE_LOCAL_IP!;
// const MONGODB_URL = process.env.DATABASE_IP!;

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
