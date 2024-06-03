import { model, Schema, Types } from "mongoose";
import Genres from "./User";
import ObjectId = module;
import * as module from "node:module";
import { MovieDocument, MovieModel } from "../types/movie";

const MovieSchema: Schema<MovieDocument> = new Schema({
  actors: [{ type: ObjectId, ref: "Actor" }],
  description: String,
  duration: Number,
  genres: [{ type: Genres, required: true }],
  release: Date,
  title: { type: String, required: true },
});

MovieSchema.statics.createMovie = async function (
  args: MovieDocument,
): Promise<MovieDocument> {
  return this.create(args);
};

MovieSchema.statics.updateMovie = async function (
  id: string,
  updateFields: Partial<MovieDocument>,
): Promise<MovieDocument> {
  return this.findByIdAndUpdate(id, updateFields, { new: true });
};

MovieSchema.statics.deleteMovie = async function (id: string): Promise<void> {
  return this.findByIdAndDelete(id);
};

const Movie = model<MovieDocument, MovieModel>("movie", MovieSchema);

export default Movie;
