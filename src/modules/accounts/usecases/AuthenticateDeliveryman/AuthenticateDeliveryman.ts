import { prisma } from "../../../../database/prisma";
import { compare } from "bcrypt";
import { auth } from "../../../../config/auth";

interface IAuthenticateDeliverymanRequest {
  email: string;
  password: string;
}

export class AuthenticateDeliveryman {
  async execute({ email, password }: IAuthenticateDeliverymanRequest) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        email
      },
    });

    if (!deliveryman) {
      throw new Error("400|Email or password is invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("400|Email or password is invalid!");
    }

    const token = auth.sign({
      userId: deliveryman.id, type: "deliveryman", data: {
        email
      }
    });

    return { token, deliveryman };
  }
}
