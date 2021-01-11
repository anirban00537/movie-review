import express from "express";
import {
  createReview,
  deleteReview,
  getReviews,
} from "../controllers/review.js";
const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);
router.patch("/");
router.delete("/:id", deleteReview);

export default router;
