// when directed to /user route do somthing
import { Router } from "express";
import registerUser from "../controllers/user.controller.js";

const router = Router();

// redirect to /user/register : transfer the controll to the user-controller function for "registration" 
router.route("/register").post(registerUser);

// if wants to login : 
// router.router("/login").post(loginUser);

export default router;