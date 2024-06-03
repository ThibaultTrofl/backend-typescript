import express from "express";
import User from "../models/User";
import { UserDocument } from "../types/user";

export const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  try {
    console.log("oui");
    const { username, email, password } = req.body;
    const newUser: UserDocument = await User.createUser({
      username,
      email,
      password,
    });
    res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "An error occurred" });
  }
});

userRouter.delete("/:id", async (req, res): Promise<void> => {
  const { id } = req.params;
  const newUser = await User.deleteUser(id);
  res.status(200).json({ message: "User deleted successfully." });
});
