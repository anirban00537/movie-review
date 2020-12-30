import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  stars: {
    type: Number,
    default: 0,
  },
  selectedFile: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
