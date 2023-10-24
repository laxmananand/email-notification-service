const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const authRoute = require("./auth.router");
const taskRouter = require("./task.router");

router.use("/auth", authRoute);
router.use("/task", taskRouter);

module.exports = router;
