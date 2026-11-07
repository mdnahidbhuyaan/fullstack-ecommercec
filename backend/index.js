const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

// Database Connection
connectDB().then(() => {
  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("MongoDB connected");
  });
});
