import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";
const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //FIX: this is not returning the access token
  //error: <accessToken will be set when you create a session>
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  console.log("accessToken", accessToken);
  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);

  console.log("decoded", decoded);
  if (decoded) {
    res.locals.user = decoded;
    return next();
  }
  return next();
};

export default deserializeUser;
