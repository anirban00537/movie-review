import mongoose from "mongoose";
import Review from "../models/reviewModel.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  const reviewFromFront = req.body;
  const newReview = new Review(reviewFromFront);
  try {
    await newReview.save();
    console.log("successfully saved");
    res.status(201).json(newReview);
    
  } catch (error) {
    console.log("error:", error.message);
    res.status(409).send(error.message);
  }
};
