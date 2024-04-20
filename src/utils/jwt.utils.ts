import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

export function signJwt(object: Object, options?: jwt.SignOptions) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string, options?: jwt.VerifyOptions) {
  console.log("entrer verifyJWT");
  try {
    console.log("first decoded", decoded);

    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error) {
    console.log("jwt error", error.message);
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}
