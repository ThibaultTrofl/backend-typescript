import { Actor } from "./actor";
import { Model, Document, Types, Schema } from "mongoose";

export enum Genres {
  ACTION = "ACTION",
  THRILLER = "THRILLER",
  COMEDY = "COMEDY",
  DRAMA = "DRAMA",
  HORROR = "HORROR",
  SCIENCE_FICTION = "SCIENCE_FICTION",
  ROMANCE = "ROMANCE",
  FANTASY = "FANTASY",
  ADVENTURE = "ADVENTURE",
  ANIMATION = "ANIMATION",
  CRIME = "CRIME",
  MYSTERY = "MYSTERY",
  DOCUMENTARY = "DOCUMENTARY",
  FAMILY = "FAMILY",
  WAR = "WAR",
  WESTERN = "WESTERN",
  MUSIC = "MUSIC",
  SPORT = "SPORT",
  SUPERHERO = "SUPERHERO",
}

export interface Movie {
  actors: [{ type: Schema.Types.ObjectId; ref: "Actor" }];
  description: string;
  duration: number;
  genres: { type: Genres[]; required: true };
  release: Date;
  title: { type: String; required: true };
}

export interface MovieDocument extends Movie, Document {}

export interface MovieModel extends Model<MovieDocument> {
  createMovie(args: Movie): Promise<MovieDocument>;
  updateMovie(
    id: string,
    updatedFields: Partial<Movie>,
  ): Promise<MovieDocument>;
  deleteMovie(id: string): Promise<void>;
}
