import express from "express";
import User from "../models/User";

export const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = await User.createUser({
    username,
    email,
    password,
  });
  res.status(200).json(newUser);
});

userRouter.delete("/:id", async (req, res): Promise<void> => {
  const { id } = req.params;
  const newUser = await User.deleteUser(id);
  res.status(200).json({ message: "User deleted successfully." });
});
