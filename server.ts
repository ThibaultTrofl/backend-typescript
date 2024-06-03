import express, { Application, Request, Response } from "express";
import { movieRouter } from "./routes/movies";
import { userRouter } from "./routes/users";
import { playlistRouter } from "./routes/playlists";
import { actorRouter } from "./routes/actors";
import { reviewRouter } from "./routes/reviews";
import { envVariables } from "./envVariables";
import { connectDB } from "./connectDB";

const app: Application = express();

app.use("/movie", movieRouter);
app.use("/user", userRouter);
app.use("/playlist", playlistRouter);
app.use("/actor", actorRouter);
app.use("/review", reviewRouter);

app.get("/", (req: Request, res: Response): void => {
  res.json("Typescript with Express");
});

connectDB().then(() =>
  app.listen(envVariables.PORT || 4001, (): void => {
    console.log(`Server has started on PORT ${envVariables.PORT}!`);
  }),
);
