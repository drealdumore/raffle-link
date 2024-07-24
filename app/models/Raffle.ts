import mongoose from "mongoose";

const RaffleSchema = new mongoose.Schema({
  title: String,
  description: String,
  isPaid: Boolean,
  price: Number,
  img: String,
  startDate: Date,
  endDate: Date,
  entries: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Raffle = mongoose.models.Raffle || mongoose.model("Raffle", RaffleSchema);
export default Raffle;

// user can create raffles {
// title, userID}

// they can see who applied for their raffles through the entries

// for user to enter the raffles, they have to send their email and name

