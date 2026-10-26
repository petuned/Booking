import type { Request, Response, NextFunction } from "express";
import z from "zod";

export const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({ error: "Unknown endpoint" });
};

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(`${error.name}: ${error.message}`);

  if (error instanceof z.ZodError) {
    return res.status(400).json({
      error: error.issues[0]?.message
    });
  }

  return res.status(500).json({
    error: "Something went wrong"
  });
};
