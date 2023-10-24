const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
const collname = "task";
const task = mongoose.model(collname, taskSchema);
module.exports = task;
