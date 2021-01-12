import express from "express";
import {
  createReview,
  deleteReview,
  getReviews,
} from "../controllers/review.js";
const router = express.Router();
import requireLogin from "../middleware/requireMiddleware.js";

router.get("/", requireLogin, getReviews);
router.post("/", requireLogin, createReview);
router.patch("/");
router.delete("/:id", requireLogin, deleteReview);

export default router;
