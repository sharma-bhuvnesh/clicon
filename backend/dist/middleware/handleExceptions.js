"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (func) => {
    return function (req, res, next) {
        try {
            func(req, res, next);
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: true, message: "Something went wrong!!" });
        }
    };
};
