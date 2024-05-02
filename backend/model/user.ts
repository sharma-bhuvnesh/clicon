import { NextFunction } from "express";
import mongoose, { Document, Model } from "mongoose";

const bcrypt = require("bcrypt");
const saltRounds = 12;

// model/user.ts

const userSchema = new mongoose.Schema({
  // Define your schema here
  name: String,
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  createdAt: Date,
});

// Define pre-save hook
userSchema.pre<User>("save", async function (this: User, next: NextFunction) {
  // Your pre-save hook logic here
  // 'this' refers to the document being saved
  // Call 'next()' when done to proceed with the save operation
  this.createdAt = new Date();
  this.isAdmin = false;
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
} as (this: any) => Promise<void>);

// Define interfaces for User and UserModel
interface User extends Document {
  // Define your user document properties
  name: String;
  username: String;
  email: String;
  password: String;
  isAdmin: Boolean;
  createdAt: Date;
}

interface UserModel extends Model<User> {
  // Define static methods if any
}

const User = mongoose.model<User, UserModel>("User", userSchema);

export default User;
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
