const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    //bearer space token
    const tokendata = authorizationHeader.split(" ");
    //tokendata = ["bearer","token"];

    const token = tokendata[1];

    console.log({ token });
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        return res
          .status(401)
          .json({ message: "user is unauthorised", success: false });
      }
      console.log({ decoded });
      req.locals = {}; //This line initializes an empty object req.locals on the req object, which is typically
      //the request object in a Node.js application. It's used to store data that can be passed between
      //middleware functions during the request-response cycle.
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
