import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { getReasonPhrase } from "http-status-codes";
import { routes } from "./routes";

const server = express();

server.use(express.json());

server.use(routes);

server.use((err: Error, _1: Request, response: Response, _2: NextFunction) => {
  if (err instanceof Error) {
    const [status, error] = err.message.split('|');

    return response.status(Number(status)).json({
      status: getReasonPhrase(status),
      body: { error }
    });
  }

  return response.status(500).json({
    status: getReasonPhrase(500),
    body: { error: err }
  });
});

server.listen(3333, () => {
  console.log("🚀 Server running on port 3333!");
});
