import z from "zod";
import * as dotenv from "dotenv";

dotenv.config();

const schema = z.object({
  PORT: z.string().min(4),
  MONGODB_URI: z.string().url(),
});

export const envVariables = schema.parse(process.env);
