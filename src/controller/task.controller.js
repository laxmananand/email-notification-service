const services = require("../service");

const createTask = async (req, res) => {
  try {
    const email = req.locals.user.email;
    const { description, title, time } = req.body;

    await services.queryService.saveTask(description, email, title, time);
    return res
      .status(200)
      .json({ message: "task created successfully ", success: true });
  } catch (err) {
    console.log("unable to complete task", err);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false });
  }
};
module.exports = { createTask };
