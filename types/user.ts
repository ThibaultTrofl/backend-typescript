import { Document, Model } from "mongoose";

export interface User {
  username: { type: string; required: true };
  email: { type: string; required: true };
  password: { type: string; required: true };
}

export interface UserDocument extends User, Document {}

export interface UserModel extends Model<UserDocument> {
  createUser(args: User): Promise<UserDocument>;
  deleteUser(id: string): Promise<void>;
}
