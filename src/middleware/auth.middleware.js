const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  try {
    const token = req.body.token;
    console.log({ token });
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        return res
          .status(401)
          .json({ message: "user is unauthorised", success: false });
      }
      console.log({ decoded });
      req.locals = {};
      req.locals.user = decoded;
      //   req.user = decoded;
      console.log("set user data to request");
    });
    next();
  } catch (err) {
    console.log("Error while verifying token", err);
    return res
      .status(500)
      .json({ message: "somehting went wrong", success: false });
  }
};
module.exports = { verifyToken };
