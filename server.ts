import express, { Application, Request, Response } from "express";
import { envVariables } from "./envVariables";
import { connectDB } from "./connectDB";

const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
  res.json("Typescript with Express");
});

connectDB().then(() =>
  app.listen(envVariables.PORT || 4001, (): void => {
    console.log(`Server has started on PORT ${envVariables.PORT}!`);
  }),
);
