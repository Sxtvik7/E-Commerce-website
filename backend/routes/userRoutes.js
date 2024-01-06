import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
} from "../controller/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";


router.get("/", getUsers);
router.post("/", registerUser);

router.post("/login", authUser);
router.post("/logout", logoutUser);

router.get("/profile", protect, getUserProfile);
router.get("/profile", protect, updateUserProfile);

router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
