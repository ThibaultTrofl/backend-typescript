import express from "express";
import Movie from "../models/Movie";
import Genres from "../models/User";
import { MovieDocument } from "../types/movie";

export const movieRouter = express.Router();

movieRouter.post("/", async (req, res) => {
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
    res.status(500).send("Error occured");
  }
});

movieRouter.patch("/:id", async (req, res) => {
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
