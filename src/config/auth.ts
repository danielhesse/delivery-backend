import { sign as Sign } from "jsonwebtoken";

interface IAuthSignRequest {
  userId: string;
  type: "customer" | "deliveryman";
  data: {
    email?: string;
  },
}

export const auth = {
  sign: ({ userId, type, data }: IAuthSignRequest) => {
    let key = "23268134223d71d5706fba1d54fc03aa";

    if (type === "deliveryman") {
      key = "234c7c1f1a0013ee278f73715709ae4e";
    }

    return Sign(data, key, {
      subject: userId,
      expiresIn: "1d"
    });
  }
}
