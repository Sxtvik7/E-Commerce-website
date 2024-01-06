import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

//Logging in User
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {

    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {expiresIn: '30d'});

    //set jwt as HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 1000 //30 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }else{
    res.status(401);
    throw new Error("Invalid Email or Password");
  }

});

//Signup User | Register New User
const registerUser = asyncHandler(async (req, res) => {
  res.send("user Registered");
});

//Logout User
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//Get User's Profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("User Profile");
});

//Update User Profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send(" update User Profile");
});

//Update User Profile
const deleteUser = asyncHandler(async (req, res) => {
  res.send(" Delete User Profile");
});

//get all Users
const getUsers = asyncHandler(async (req, res) => {
  res.send(" get all User Profile");
});

//get User by id
const getUserById = asyncHandler(async (req, res) => {
  res.send(" get User by Id");
});

//Update user (only Admin access)
const updateUser = asyncHandler(async (req, res) => {
  res.send("user Updated");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
};
