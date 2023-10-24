const express = require("express");
const app = express();
require("dotenv").config();
const conn = require("./config/dbconn");
conn();

const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = require("./router/index");
app.use("/", router);

app.listen(PORT, () => {
  console.log("listening to port ", PORT);
});
