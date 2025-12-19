import express from "express";
import { getMembers, getPendingMembers, createMember } from "../controllers/members.controller.js";
import Member from '../models/Member.js';

const router = express.Router();

router.get("/", getMembers);
router.get("/pending", getPendingMembers);
router.post("/", createMember);

export default router;