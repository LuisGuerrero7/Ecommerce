import express , {Router} from "express"
import { obtenerUsuarios,crearUsuario, eliminarUsuarios } from "../controllers/usuarioControllers"

const router = Router()

router.get("/usuarios", obtenerUsuarios)
router.post("/usuarios", crearUsuario)
router.delete("/usuarios/:id", eliminarUsuarios)

export default router