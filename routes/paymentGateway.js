import express from "express";
import {razorPayPost} from "../controllers/Razorpay.js"

const router = express.Router();
router.post("/razorpay",razorPayPost);
export default router;