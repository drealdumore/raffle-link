import mongoose from "mongoose";

const RaffleSchema = new mongoose.Schema({
  title: String,
  description: String,
  isPaid: Boolean,
  price: Number,
  img: String,
  entries: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Raffle = mongoose.models.Raffle || mongoose.model("Raffle", RaffleSchema);
export default Raffle;
