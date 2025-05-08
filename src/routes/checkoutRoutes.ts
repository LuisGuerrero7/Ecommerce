import { Router } from "express";
import { crearPedido } from "../controllers/checkoutController";

const router = Router()
router.post("/checkout", crearPedido)

export default router