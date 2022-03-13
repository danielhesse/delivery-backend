import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import { CreateDeliveryman } from "./CreateDeliveryman";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createDeliveryman = new CreateDeliveryman();

    const result = await createDeliveryman.execute({
      name,
      email,
      password
    });

    return response.status(201).json({
      status: getReasonPhrase(201),
      body: result
    });
  }
}
