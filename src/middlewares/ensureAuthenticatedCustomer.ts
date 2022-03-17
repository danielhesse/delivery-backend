import { NextFunction, Request, Response } from "express";
import { auth } from "../config/auth";

interface ITokenPayload {
  sub: string;
}

export async function ensureAuthenticatedCustomer(
  request: Request, _: Response, next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("401|Token is missing!");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: customerId } = auth.verify({
      token,
      type: "customer"
    }) as ITokenPayload;

    request.customerId = customerId;

    return next();
  } catch (err) {
    throw new Error("401|Invalid token!");
  }
}
