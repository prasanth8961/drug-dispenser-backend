import express from "express";
import * as AuthController from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/api/register", AuthController.signUp);
router.post("/api/user/login", AuthController.signIn);

export default router;
