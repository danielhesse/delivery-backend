import { hash } from "bcrypt";
import { prisma } from "../../../../database/prisma";

interface ICreateDeliverymanRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateDeliveryman {
  async execute({ name, email, password }: ICreateDeliverymanRequest) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        email: {
          mode: "insensitive"
        },
      },
    });

    if (deliverymanExists) {
      throw new Error("400|Deliveryman already exists!");
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        name,
        email,
        password: hashPassword
      },
    });

    return deliveryman;
  }
}
