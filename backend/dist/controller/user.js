"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const bcrypt = require("bcrypt");
const UserModal = require("../model/user");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModal.findOne({
            $or: [{ email: req.body.email }, { username: req.body.email }],
        });
        if (!user)
            return res.status(404).json({ error: true, message: "User not found" });
        const isMatch = yield bcrypt.compare(req.body.password, user.password);
        if (!isMatch)
            return res
                .status(400)
                .json({ error: true, message: "Incorrect email and password" });
        return res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: true, message: "Something went wrong!!" });
    }
});
exports.login = login;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isEmailExists = yield UserModal.findOne({ email: req.body.email });
        if (isEmailExists)
            return res
                .status(400)
                .json({ error: true, message: "Email is already exists!" });
        const isUsernameExists = yield UserModal.findOne({
            username: req.body.username,
        });
        if (isUsernameExists)
            return res
                .status(400)
                .json({ error: true, message: "Username is already exists!" });
        const user = yield UserModal.create(Object.assign({}, req.body));
        return res
            .status(200)
            .json({ success: true, message: "user create successfully!" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: true, message: "Something went wrong!!" });
    }
});
exports.register = register;
