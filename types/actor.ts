import { Model } from "mongoose";

export interface Actor {
  name: { type: string; required: true };
  birthDate: Date;
  nationality: string;
}

export interface ActorDocument extends Actor, Document {}

export interface ActorModel extends Model<ActorDocument> {
  createActor(args: Actor): Promise<ActorDocument>;
  updateActor(id: string, arg: Partial<Actor>): Promise<ActorDocument>;
}
