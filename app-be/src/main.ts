import express, { Response, Request } from "express";

const server = express();
const port = 3000;

server.get("/", (req: Request, res: Response) => res.send("Hello world"));

server.listen(port);
