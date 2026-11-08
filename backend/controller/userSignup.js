const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

async function userSignUpController(req, res) {
  try {
    // Get user information
    const { email, password, name } = req.body;

    // console.log(req.body, "req.body");

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide name, email and password",
        success: false,
        error: true,
      });
    }

    // Check existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
        error: true,
      });
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Prepare user data
    const payload = {
      name,
      email,
      password: hashPassword,
    };

    // Save user to database
    const userData = new userModel(payload);
    const saveUser = await userData.save();

    // Send success response
    return res.status(201).json({
      data: {
        _id: saveUser._id,
        name: saveUser.name,
        email: saveUser.email,
      },
      success: true,
      error: false,
      message: "User created successfully!",
    });
  } catch (err) {
    console.error("Signup Error:", err);

    return res.status(500).json({
      message: err.message || "Internal server error",
      success: false,
      error: true,
    });
  }
}

module.exports = userSignUpController;
