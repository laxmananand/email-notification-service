// token = 3 part  = payload, signature, encryption methode
//payload = user data
//encoded

//set expiry time
const jwt = require("jsonwebtoken");
exports.generateJwt = async (user) => {
  try {
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "24h" });
    return token;
  } catch (err) {
    console.log("error in generating token");
    throw err;
  }
};
