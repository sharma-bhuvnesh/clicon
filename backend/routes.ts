const { Router } = require("express");
const routes = Router();

import HandleExceptions from "./middleware/handleExceptions";
import ValidateInput from "./middleware/validateInput";

const { loginSchema, registerSchema } = require("./validations/user");

const { login, register } = require("./controller/user");
const { addProduct } = require("./controller/product");

routes.post("/login", ValidateInput(loginSchema), HandleExceptions(login));

routes.post(
  "/register",
  ValidateInput(registerSchema),
  HandleExceptions(register)
);

routes.post("/product/add", HandleExceptions(addProduct));

export default routes;
