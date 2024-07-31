import mongoose, { Schema, Document, Model, model } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  name?: string | undefined | null;
  email?: string | undefined | null;
  image?: string | undefined | null;
  password: string;
}

// TODO - ADD THE RAFFLES. AND FIND THE BEST WAY TO ADD RAFFLES TO USERS
// EITHER CHILD AWARE OF PARAENT OR PARENT AWARE OF CHILD.
// SEEING THAT SOME USERS HAVE IMAGE AND PAERTICIPANTS HAVE NAME, EMAIL

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

UserSchema.pre("save", async function (this: IUser, next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

const User: Model<IUser> =
  mongoose.models.User || model<IUser>("User", UserSchema);

export default User;
