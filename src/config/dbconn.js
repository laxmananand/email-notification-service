const mongoose = require("mongoose");
console.log("config file");
const connectDb = () => {
  try {
    console.log("establishing conn initiate");
    mongoose.connect(
      "mongodb+srv://laxman7291:mcdTsobEEICs85jm@signwithgooge.idgrjwr.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    const connection = mongoose.connection;
    connection.on("error", (error) => {
      console.log("mongodb Connection failed", error);
    });
    connection.once("open", () => {
      console.log("connection established successfully");
    });
  } catch (err) {
    console.log("mongoDb connection failed", err);
  }
};
module.exports = connectDb;
