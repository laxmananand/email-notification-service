const UserSchema = require("../model/user.model");
const taskSchema = require("../model/task.model");
const saveUserProfile = async (
  displayName,
  email,
  image,
  accessToken,
  expiryTime
) => {
  try {
    const result = await UserSchema.updateOne(
      {
        email: email,
      },
      {
        $set: {
          name: displayName,
          email: email,
          image: image,
          accessToken: accessToken,
          expiryTime: expiryTime,
        },
      },
      {
        upsert: true,
      }
    );
    return true;
  } catch (err) {
    console.log("error in saving user profile data");
    throw err;
  }
};

const saveTask = async (description, email, title, time) => {
  try {
    const obj = new taskSchema({
      description,
      email,
      title,
      time,
    });
    await obj.save();
    return true;
  } catch (err) {
    console.log("unable to save task");
    throw err;
  }
};
module.exports = { saveUserProfile, saveTask };
