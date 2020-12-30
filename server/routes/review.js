import express from "express";
import { createReview, getReviews } from "../controllers/review.js";
const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);
router.patch("/");
router.delete("/");
router.patch("/");

export default router;
