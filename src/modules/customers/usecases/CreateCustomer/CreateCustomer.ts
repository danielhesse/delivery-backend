import { prisma } from "../../../../database/prisma";
import { hash } from "bcrypt";

interface ICreateCustomerRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  hasWhatsapp: boolean;
}

export class CreateCustomer {
  async execute({ name, email, password, phone, hasWhatsapp }: ICreateCustomerRequest) {
    const customerExists = await prisma.customer.findFirst({
      where: {
        email: {
          mode: "insensitive"
        },
      },
    });

    if (customerExists) {
      throw new Error("400|Customer already exists!");
    }

    const hashPassword = await hash(password, 10);

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        password: hashPassword,
        phone,
        hasWhatsapp
      },
    });

    return customer;
  }
}
