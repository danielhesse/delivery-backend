import { Request, Response } from "express";
import { CreateDelivery } from "./CreateDelivery";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { customerId, product, description } = request.body;

    const createDelivery = new CreateDelivery();

    const result = await createDelivery.execute({
      customerId,
      product,
      description
    });

    return response.status(201).json(result);
  }
}
