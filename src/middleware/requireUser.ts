import { Request, Response, NextFunction } from "express";
const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  if (!user) {
    return res
      .status(403)
      .send({ error: "You need to be logged in to access this resource" });
  }
  return next();
};

export default requireUser;
