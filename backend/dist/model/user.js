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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt = require("bcrypt");
const saltRounds = 12;
// model/user.ts
const userSchema = new mongoose_1.default.Schema({
    // Define your schema here
    name: String,
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    createdAt: Date,
});
// Define pre-save hook
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Your pre-save hook logic here
        // 'this' refers to the document being saved
        // Call 'next()' when done to proceed with the save operation
        this.createdAt = new Date();
        this.isAdmin = false;
        this.password = yield bcrypt.hash(this.password, saltRounds);
        next();
    });
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
/*

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  createdAt: Date,
});

userSchema.pre("save", async function (next: NextFunction) {
  this.createdAt = new Date();
  this.isAdmin = false;
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

module.exports = mongoose.model("User", userSchema);
 */
