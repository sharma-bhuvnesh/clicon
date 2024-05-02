import mongoose from "mongoose";

const product = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model("Product", product);
