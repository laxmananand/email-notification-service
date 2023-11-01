const express = require("express");

const router = express.Router();
const authController = require("../controller/auth.controller");

router.get("/initiate-auth", authController.initiateAuthentication);
router.get("/validate", authController.validateCallback);

module.exports = router;

//server - redirect user to google with client id, redirect url [after authenitcation , where googlle will redirect url]

//after google successfully authenticated user
//google redirect user to the redirect url(my server) sent by the server with params (code)
//server will get (code), and now server will sent a rest api request directly to goole and ask to access token in exchange of code.
//in this rest api request , server will also sent client credentail to authenticate himself
