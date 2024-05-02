"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDB = void 0;
const mongoose = require("mongoose");
const startDB = () => {
    mongoose
        .connect(`mongodb+srv://bhuvnesh:lxPLLEYlj0vSubwc@cluster0.fejdosg.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => console.log("Connected!"));
};
exports.startDB = startDB;
