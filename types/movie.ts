import { Actor } from "./actor";
import { Model, Document, Types } from "mongoose";
import ObjectId = module;
import * as module from "node:module";

export type Genres =
  | "ACTION"
  | "THRILLER"
  | "COMEDY"
  | "DRAMA"
  | "HORROR"
  | "SCIENCE_FICTION"
  | "ROMANCE"
  | "FANTASY"
  | "ADVENTURE"
  | "ANIMATION"
  | "CRIME"
  | "MYSTERY"
  | "DOCUMENTARY"
  | "FAMILY"
  | "WAR"
  | "WESTERN"
  | "MUSIC"
  | "SPORT"
  | "SUPERHERO";

export interface Movie {
  actors: [{ type: ObjectId; ref: "Actor" }];
  description: string;
  duration: number;
  genres: { type: Genres[]; required: true };
  release: Date;
  title: { type: String; required: true };
}

export interface MovieDocument extends Movie, Document {}

export interface MovieModel extends Model<MovieDocument> {
  createMovie(args: MovieDocument): Promise<MovieDocument>;
  updateMovie(
    id: string,
    updatedFields: Partial<Movie>,
  ): Promise<MovieDocument>;
  deleteMovie(id: string): Promise<void>;
}
