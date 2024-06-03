import mongoose, { model, Schema, Types } from "mongoose";
import { PlaylistDocument, PlaylistModel } from "../types/playlist";
import ObjectId = module;
import * as module from "node:module";

const PlaylistSchema: Schema<PlaylistDocument> = new Schema({
  movies: [{ type: ObjectId, ref: "Movie" }],
  name: { type: String, required: true },
  user: { type: ObjectId, ref: "User", required: true },
});

PlaylistSchema.statics.createPlaylist = async function (
  args: PlaylistDocument,
): Promise<PlaylistDocument> {
  return this.create(args);
};
PlaylistSchema.statics.updatePlaylist = async function (
  id: string,
  args: Partial<PlaylistDocument>,
): Promise<PlaylistDocument> {
  return this.findByIdAndUpdate(id, args, { new: true });
};
PlaylistSchema.statics.deletePlaylist = async function (
  id: string,
): Promise<void> {
  return this.findByIdAndDelete(id);
};
const Playlist = model<PlaylistDocument, PlaylistModel>(
  "playlist",
  PlaylistSchema,
);

export default Playlist;
