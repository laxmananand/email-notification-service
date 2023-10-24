const express = require("express");

const router = express.Router();
const authController = require("../controller/auth.controller");

router.get("/initiate-auth", authController.initiateAuthentication);
router.get("/validate", authController.validateCallback);

module.exports = router;
