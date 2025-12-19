import express from "express";
import { getMembers, getPendingMembers, createMember, approveMember } from "../controllers/members.controller.js";
import Member from '../models/Member.js';

const router = express.Router();

router.get("/", getMembers);
router.get("/pending", getPendingMembers);
router.post("/", createMember);
router.patch("/:id/approve", approveMember);

export default router;