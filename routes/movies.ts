import express, { Request, Response } from "express";
import Movie from "../models/Movie";
import { MovieDocument } from "../types/movie";

export const movieRouter = express.Router();

movieRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { actors, description, duration, genres, release, title } = req.body;
    const newMovie: MovieDocument = await Movie.createMovie({
      actors,
      description,
      duration,
      genres,
      release,
      title,
    });
    res.status(200).json(newMovie);
  } catch (e) {
    console.error(e);
    res.status(500).send("An error occured");
  }
});

movieRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { actors, description, duration, genres, release, title } = req.body;
    const updatedMovie: MovieDocument = await Movie.updateMovie(id, {
      actors,
      description,
      duration,
      genres,
      release,
      title,
    });
    res.status(200).json(updatedMovie);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error occured");
  }
});
