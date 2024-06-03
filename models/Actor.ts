import mongoose, { model, Schema } from "mongoose";
import { ActorDocument, ActorModel } from "../types/actor";

const ActorSchema: Schema<ActorDocument> = new Schema({
  name: { type: String, required: true },
  birthDate: Date,
  nationality: String,
});

ActorSchema.statics.createActor = async function (
  args: ActorDocument,
): Promise<ActorDocument> {
  return this.create(args);
};

ActorSchema.statics.updateActor = async function (
  id: string,
  args: Partial<ActorDocument>,
): Promise<ActorDocument> {
  return this.findByIdAndUpdate(id, args, { new: true });
};

const Actor = model<ActorDocument, ActorModel>("actor", ActorSchema);

export default Actor;
