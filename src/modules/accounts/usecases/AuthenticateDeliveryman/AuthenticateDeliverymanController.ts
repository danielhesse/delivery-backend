import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import { AuthenticateDeliveryman } from "./AuthenticateDeliveryman";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateDeliveryman = new AuthenticateDeliveryman();

    const { token, deliveryman } = await authenticateDeliveryman.execute({
      email,
      password
    });

    return response.status(200).json({
      status: getReasonPhrase(200),
      body: {
        customer: {
          name: deliveryman.name,
          email: deliveryman.email
        },
        token
      }
    });
  }
}
