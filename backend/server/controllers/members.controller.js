import Member from "../models/Member.js";

export const getMembers = async (req, res) => {
  const members = await Member.find({ approved: true });
  res.json(members);
};

export const getPendingMembers = async (req, res) => {
  const pending = await Member.find({ approved: false });
  res.json(pending);
};