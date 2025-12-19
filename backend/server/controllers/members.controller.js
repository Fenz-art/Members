import Member from "../models/Member.js";

export const getMembers = async (req, res) => {
  const members = await Member.find({ approved: true });
  res.json(members);
};

export const getPendingMembers = async (req, res) => {
  const pending = await Member.find({ approved: false });
  res.json(pending);
};

export const createMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json({ success: true, member });
  } catch (err) {
    console.error("Create member error:", err);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};