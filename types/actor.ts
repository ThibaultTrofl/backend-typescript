import { Model } from "mongoose";

export interface Actor {
  name: { type: string; required: true };
  birthDate: Date;
  nationality: string;
}

export interface ActorDocument extends Actor, Document {}

export interface ActorModel extends Model<ActorDocument> {
  createActor(args: ActorDocument): Promise<ActorDocument>;
  updateActor(arg: Partial<ActorDocument>): Promise<ActorDocument>;
}
