import express from "express";
import { getMembers, getPendingMembers } from "../controllers/members.controller.js";
import Member from '../models/Member.js';

const router = express.Router();

router.get("/", getMembers);
router.get("/pending", getPendingMembers);

router.post("/", async (req, res) => {
  try {
    const member = await Member.create({
      ...req.body,
      approved: false
    });
    res.status(201).json({
      success: true,
      member
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to create member"
    });
  }
});

export default router;