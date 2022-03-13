import { Request, Response } from "express";
import { AuthenticateCustomer } from "./AuthenticateCustomer";

export class AuthenticateCustomerController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateCustomer = new AuthenticateCustomer();

    const { token, customer } = await authenticateCustomer.execute({
      email,
      password
    });

    return response.json({
      customer: {
        name: customer.name,
        email: customer.email
      },
      token
    });
  }
}
