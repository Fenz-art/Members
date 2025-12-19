import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: String,
    domain: String,
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);