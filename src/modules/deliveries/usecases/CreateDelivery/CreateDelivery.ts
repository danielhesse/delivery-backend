import { prisma } from "../../../../database/prisma";

interface ICreateDeliveryRequest {
  customerId: string;
  product: string;
  description: string;
}

export class CreateDelivery {
  async execute({ customerId, product, description }: ICreateDeliveryRequest) {
    return prisma.delivery.create({
      data: {
        customerId,
        product,
        description,
      },
    });
  }
}
