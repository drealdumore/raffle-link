import mongoose, { Schema, Document, Model, model } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
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
