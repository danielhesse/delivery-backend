import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import { AuthenticateCustomer } from "./AuthenticateCustomer";

export class AuthenticateCustomerController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateCustomer = new AuthenticateCustomer();

    const { token, customer } = await authenticateCustomer.execute({
      email,
      password
    });

    return response.status(200).json({
      status: getReasonPhrase(200),
      body: {
        customer: {
          name: customer.name,
          email: customer.email
        },
        token
      }
    });
  }
}
