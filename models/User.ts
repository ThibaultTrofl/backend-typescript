import mongoose, { model, Schema } from "mongoose";
import { UserDocument, UserModel } from "../types/user";

const UserSchema: Schema<UserDocument> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.statics.deleteUser = async function (id: string): Promise<void> {
  return this.findByIdAndDelete(id);
};

const User = model<UserDocument, UserModel>("user", UserSchema);

export default User;
