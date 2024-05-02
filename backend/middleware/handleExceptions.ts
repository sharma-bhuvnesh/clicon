import { Request, Response, NextFunction } from "express";

export default (
  func: (req: Request, res: Response, next: NextFunction) => void
) => {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      func(req, res, next);
    } catch (error) {
      
      return res
        .status(500)
        .json({ error: true, message: "Something went wrong!!" });
    }
  };
};
