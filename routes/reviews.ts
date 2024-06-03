import express from "express";
import Review from "../models/Review";
import { ReviewDocument } from "../types/review";

export const reviewRouter = express.Router();

reviewRouter.post("/", async (req, res) => {
  try {
    const { comment, movie, rating, user } = req.body;
    const newReview: ReviewDocument = await Review.createReview({
      comment,
      movie,
      rating,
      user,
    });
    res.status(200).json(newReview);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "An error occurred" });
  }
});

reviewRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { comment, movie, rating, user } = req.body;
    const updatedReview: ReviewDocument = await Review.updateReview(id, {
      comment,
      movie,
      rating,
      user,
    });
    res.status(200).json(updatedReview);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "An error occurred" });
  }
});

reviewRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReview = await Review.deleteReview(id);
    res.status(200).json("Review successfully deleted");
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "An error occurred" });
  }
});
