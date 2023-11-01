const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const authController = require("../controller/task.controller");
const router = express.Router();
const validationMiddleware = require("../middleware/validate.middleware");
router.post(
  "/create",
  validationMiddleware.validate,
  authMiddleware.verifyToken,
  authController.createTask
);
module.exports = router;

//testing
// const controller = async(req,res)=>{

// }
// router.post("/create",controller)
//get - fetch somthing from database
//post - save new things in database
//put - manipulate or update existing thing

//controller
//   |    |    |
//   s1   s2   s3
