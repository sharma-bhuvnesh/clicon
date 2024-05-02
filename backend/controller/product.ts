import { Request, Response, NextFunction } from "express";

const ProductModal = require("../model/product");

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await ProductModal.create({ ...req.body });

  return res
    .status(200)
    .json({ message: "Product added successfully!!", success: true });
};
