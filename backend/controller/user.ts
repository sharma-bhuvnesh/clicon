import { Request, Response, NextFunction } from "express";

const bcrypt = require("bcrypt");

import UserModal from "../model/user";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await UserModal.findOne({
    $or: [{ email: req.body.email }, { username: req.body.email }],
  });
  if (!user)
    return res.status(404).json({ error: true, message: "User not found" });

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch)
    return res
      .status(400)
      .json({ error: true, message: "Incorrect email and password" });

  return res.status(200).json({ success: true, data: user });
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isEmailExists = await UserModal.findOne({ email: req.body.email });
  if (isEmailExists)
    return res
      .status(400)
      .json({ error: true, message: "Email is already exists!" });

  const isUsernameExists = await UserModal.findOne({
    username: req.body.username,
  });
  if (isUsernameExists)
    return res
      .status(400)
      .json({ error: true, message: "Username is already exists!" });

  const user = await UserModal.create({ ...req.body });
  return res
    .status(200)
    .json({ success: true, message: "user create successfully!" });
};
