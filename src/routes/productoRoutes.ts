import { Router } from "express";
import { manejoAutorizacion } from "../auth/authMiddleware";
import { getProductos, getProductoPorId, postProducto, putProducto, deleteProducto } from "../controllers/productoControllers";

const router = Router()

router.get("/productos", getProductos)
router.get("/productos/:id", getProductoPorId)
router.post("/productos", manejoAutorizacion, postProducto)
router.put("/productos/:id", manejoAutorizacion, putProducto)
router.delete("/productos/:id", manejoAutorizacion, deleteProducto)

export default router
