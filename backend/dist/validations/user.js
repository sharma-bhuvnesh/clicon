"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const Joi = require("joi");
exports.loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});
exports.registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
});
