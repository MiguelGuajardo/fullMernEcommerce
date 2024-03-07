import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";
//router
const router = express.Router();

//Routing
//Register || Method POST
router.post("/register", registerController);
//Login || Method POST
router.post("/login", loginController);

export default router;
