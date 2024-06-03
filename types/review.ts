import { Model, Types } from "mongoose";
import ObjectId = module;
import * as module from "node:module";

export interface Review {
  comment: string;
  movie: { type: ObjectId; ref: "Movie"; required: true };
  rating: { type: Number; min: 1; max: 10 };
  user: { type: ObjectId; ref: "User"; required: true };
}
export interface ReviewDocument extends Review, Document {}

export interface ReviewModel extends Model<ReviewDocument> {
  createReview(args: ReviewModel): Promise<ReviewDocument>;
  updateReview(
    id: string,
    updatedFields: Partial<ReviewModel>,
  ): Promise<ReviewDocument>;
  deleteReview(id: string): Promise<void>;
}
