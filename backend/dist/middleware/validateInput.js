"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (schema) => {
    return function (req, res, next) {
        var _a, _b;
        try {
            const { error } = schema.validate(req.body);
            if (error) {
                return res
                    .status(400)
                    .json({ error: true, message: (_b = (_a = error === null || error === void 0 ? void 0 : error.details) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message });
            }
            next();
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: true, message: "Something went wrong!!" });
        }
    };
};
