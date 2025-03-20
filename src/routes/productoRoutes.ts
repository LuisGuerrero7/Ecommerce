import { Router } from "express";
import { getProductos, getProductoPorId, postProducto, putProducto, deleteProducto } from "../controllers/productoControllers";

const router = Router()

router.get("/productos", getProductos)
router.get("/productos/:id", getProductoPorId)
router.post("/productos", postProducto)
router.put("productos/:id", putProducto)
router.delete("producto/:id", deleteProducto)
