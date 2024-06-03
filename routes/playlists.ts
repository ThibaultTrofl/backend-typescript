import express from "express";
import Playlist from "../models/Playlist";
import { MovieDocument } from "../types/movie";
import Movie from "../models/Movie";
import { PlaylistDocument } from "../types/playlist";

export const playlistRouter = express.Router();

playlistRouter.post("/", async (req, res) => {
  try {
    const { user, movies, name } = req.body;
    const newPlaylist: PlaylistDocument = await Playlist.createPlaylist({
      user,
      movies,
      name,
    });
    res.status(200).json(newPlaylist);
  } catch (e) {
    console.error(e);
    res.status(500).send("An error occurred");
  }
});

playlistRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user, movies, name } = req.body;
    const updatedPlaylist: PlaylistDocument = await Playlist.updatePlaylist(
      id,
      {
        user,
        movies,
        name,
      },
    );
    res.status(200).json(updatedPlaylist);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error occured");
  }
});

playlistRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPlaylist = await Playlist.deletePlaylist(id);
    res.status(200).json("Playlist successfully deleted");
  } catch (e) {
    console.error(e);
    res.status(500).send("Error occured");
  }
});
