const mongoose = require("mongoose");

export const startDB = () => {
  mongoose
    .connect(
      `mongodb+srv://bhuvnesh:lxPLLEYlj0vSubwc@cluster0.fejdosg.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected!"));
}
