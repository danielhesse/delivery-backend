import { prisma } from "../../../../database/prisma";

export class GetAllAvailable {
  async execute() {
    return prisma.delivery.findMany({
      where: {
        endAt: null
      },
    });
  }
}
