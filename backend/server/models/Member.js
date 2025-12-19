import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: String,
    domain: String,
    profileImageUrl: String,
    linkedinUrl: String,
    githubUrl: String,
    instagramUrl: String,
    isLead: { type: Boolean, default: false },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);