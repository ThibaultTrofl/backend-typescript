import express from "express";
import Actor from "../models/Actor";
import { ActorDocument } from "../types/actor";

export const actorRouter = express.Router();

actorRouter.post("/", async (req, res) => {
  try {
    const { name, nationality, birthDate } = req.body;
    const newActor: ActorDocument = await Actor.createActor({
      name,
      nationality,
      birthDate,
    });
    res.status(200).json(newActor);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server Error" });
  }
});

actorRouter.patch("/", async (req, res) => {
  try {
    const { id, name, nationality, birthDate } = req.body;
    const updatedActor: ActorDocument = await Actor.updateActor(id, {
      name,
      nationality,
      birthDate,
    });
    res.status(200).json(updatedActor);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server Error" });
  }
});
