import express from "express";
import { getMembers, getPendingMembers } from "../controllers/members.controller.js";

const router = express.Router();

router.get("/", getMembers);
router.get("/pending", getPendingMembers);

export default router;