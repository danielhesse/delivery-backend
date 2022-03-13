import { sign as Sign } from "jsonwebtoken";

interface IAuthSignRequest {
  email?: string;
}

export const auth = {
  sign: (data: IAuthSignRequest, userId: string) => {
    return Sign(data, "23268134223d71d5706fba1d54fc03aa", {
      subject: userId,
      expiresIn: "1d"
    });
  }
}
