import mongoose from "mongoose";

export interface IRaffle {
  title: string;
  description: string;
  img: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  participants: { name: string; email: string }[];
}

const RaffleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter raffle title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter raffle description"],
    trim: true,
  },
  img: String,
  startDate: {
    type: Date,
    required: [true, "Please enter start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Please enter end date"],
  },
  // participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdBy: { type: String, required: true },
  participants: [
    {
      name: String,
      email: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Raffle = mongoose.models.Raffle || mongoose.model("Raffle", RaffleSchema);
export default Raffle;
