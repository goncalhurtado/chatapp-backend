const User = require("../models/userSchema");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 200,
      message: "All users",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const registerUser = async (req, res) => {
  // const { username, avatar } = req.body;
  // try {
  //   const userExists = await User.findOne({ username });
  //   if (userExists) {
  //     return res.status(400).json({
  //       status: 400,
  //       message: "User already exists",
  //     });
  //   }
  //   const user = await User.create({
  //     username,
  //     avatar,
  //   });
  //   res.status(201).json({
  //     status: 201,
  //     message: "User created successfully",
  //     data: user,
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     status: 500,
  //     message: "Internal server error",
  //     error: error.message,
  //   });
  // }
};

const loginUser = async (req, res) => {
  const { username, avatar } = req.body;
  try {
    let user = await User.findOne({ username });

    if (!user) {
      user = await User.create({
        username,
        avatar,
      });
      return res.status(201).json({
        status: 201,
        message: "User created and logged in successfully",
        data: user,
      });
    }

    res.status(200).json({
      status: 200,
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
};
