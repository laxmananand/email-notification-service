const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const authController = require("../controller/task.controller");
const router = express.Router();

router.post("/create", authMiddleware.verifyToken, authController.createTask);
module.exports = router;

// const controller = async(req,res)=>{

// }
// router.post("/create",controller)
//get - fetch somthing from database
//post - save new things in database
//put - manipulate or update existing thing

//controller
//   |    |    |
//   s1   s2   s3
