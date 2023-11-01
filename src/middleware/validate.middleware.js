const joi = require("joi");

exports.validate = async (req, res, next) => {
  try {
    const schema = joi
      .object({
        title: joi.string().min(3).max(20).required(),
        description: joi.string().min(10).max(40).optional(),
        time: joi.string().required(),
      })
      .options({ allowUnknown: true });

    console.log("validating");

    const obj = req.body;
    const data = await schema.validate(obj);
    if (!data.error) next();

    console.log(data.error);
    return res
      .status(400)
      .json({ message: "validation failed", error: data.error.details });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "invalid fields", success: false });
  }
};
