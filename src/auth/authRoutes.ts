import { Router } from "express";
import { register } from "./authController";

const router = Router()

router.post("/register", register)

export default router