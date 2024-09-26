import express, { Response, Request } from "express";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const server = express();

server.get("/", (req: Request, res: Response) => res.send("Hello world"));

server.listen(process.env.PORT, () =>
  console.log(`Server start on http://localhost:${process.env.PORT}`)
);
