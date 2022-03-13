import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import { CreateCustomer } from "./CreateCustomer";

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { name, email, password, phone, hasWhatsapp } = request.body;

    const createCustomer = new CreateCustomer();

    const result = await createCustomer.execute({
      name,
      email,
      password,
      phone,
      hasWhatsapp
    });

    return response.status(201).json({
      status: getReasonPhrase(201),
      body: result
    });
  }
}
