import mongoose, { Schema } from "mongoose";
export interface IUser {
  userId: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  joinedAt: { type: Date, default: Date.now },
});

const User = mongoose.models?.User || mongoose?.model("User", UserSchema);
export default User;