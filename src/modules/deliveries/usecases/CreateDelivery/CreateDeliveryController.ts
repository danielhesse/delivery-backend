import { Request, Response } from "express";
import { CreateDelivery } from "./CreateDelivery";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { product, description } = request.body;
    const { customerId } = request;

    const createDelivery = new CreateDelivery();

    const result = await createDelivery.execute({
      customerId,
      product,
      description
    });

    return response.status(201).json(result);
  }
}
