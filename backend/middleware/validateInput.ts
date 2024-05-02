import { Request, Response, NextFunction } from "express";
import { Schema } from 'joi';


export default (schema: Schema) => {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        return res
          .status(400)
          .json({ error: true, message: error?.details?.[0]?.message });
      }

      next();
    } catch (error) {
      return res
        .status(500)
        .json({ error: true, message: "Something went wrong!!" });
    }
  };
};
