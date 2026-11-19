const express = require("express");
const router = express.Router();

const userSignUpController = require("../controller/userSignup");
const userSignInController = require("../controller/userSignin");
const userDetailsController = require("../controller/userdetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");
const UploadProductController = require("../controller/uploadProduct");
const getProductController = require("../controller/getProduct");
const UpdateProductController = require("../controller/updateProduct");


router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//  admin panel routes

router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken,updateUser);

// uploadProduct
router.post("/upload-product", authToken,UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product",authToken,UpdateProductController)
module.exports = router;
