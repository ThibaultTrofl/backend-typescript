import ObjectId = module;
import * as module from "node:module";
import { Model, Document } from "mongoose";

export interface Playlist {
  movies: [{ type: ObjectId; ref: "Movie" }];
  name: { type: String; required: true };
  user: { type: ObjectId; ref: "User"; required: true };
}

export interface PlaylistDocument extends Playlist, Document {}

export interface PlaylistModel extends Model<PlaylistDocument> {
  createPlaylist(args: Playlist): Promise<PlaylistDocument>;
  updatePlaylist(
    id: string,
    updatedFields: Partial<PlaylistDocument>,
  ): Promise<PlaylistDocument>;
  deletePlaylist(id: string): Promise<void>;
}
