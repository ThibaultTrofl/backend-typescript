import mongoose, { model, Schema, Types } from "mongoose";
import { ReviewDocument, ReviewModel } from "../types/review";
import ObjectId = module;
import * as module from "node:module";

const ReviewSchema: Schema<ReviewDocument> = new Schema({
  comment: String,
  movie: { type: Schema.Types.ObjectId, ref: "Movie", required: true },
  rating: { type: Number, min: 1, max: 10 },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

ReviewSchema.statics.createReview = async function (
  args: ReviewModel,
): Promise<ReviewDocument> {
  return this.create(args);
};
ReviewSchema.statics.updateReview = async function (
  id: string,
  args: Partial<ReviewModel>,
): Promise<ReviewDocument> {
  return this.findByIdAndUpdate(id, args, { new: true });
};

ReviewSchema.statics.createReview = async function (id: string): Promise<void> {
  return this.findByIdAndDelete(id);
};

const Review = model<ReviewDocument, ReviewModel>("review", ReviewSchema);

export default Review;
