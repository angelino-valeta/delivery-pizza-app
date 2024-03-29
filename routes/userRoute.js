const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    newUser.save(); 
    res.status(201).json({
      message: "User Created",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
