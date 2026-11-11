const express = require("express");
const router = express.Router();

const userSignUpController = require("../controller/userSignup");
const userSignInController = require("../controller/userSignin");
const userDetailsController = require("../controller/userdetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//  admin panel routes

router.get("/all-user",authToken,allUsers);

module.exports = router;
