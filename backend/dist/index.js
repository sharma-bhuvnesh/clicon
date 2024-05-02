"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const startDB = require("./db");
const routes = require("./routes");
startDB();
app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
app.listen(3008, () => {
    console.log("server is working fine");
});
