import { Request, Response } from "express";
import { GetAllAvailable } from "./GetAllAvailable";

export class GetAllAvailableController {
  async handle(_: Request, response: Response) {
    const getAllAvailable = new GetAllAvailable();

    const result = await getAllAvailable.execute();

    return response.json(result);
  }
}
