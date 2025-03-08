import express , {Router} from "express"
import { obtenerUsuarios,crearUsuario, eliminarUsuarios } from "../controllers/usuarioControllers"
import { validarUsuario } from "../middleware/validarUsuario"

const router = Router()

router.get("/usuarios", obtenerUsuarios)
router.post("/usuarios", validarUsuario, crearUsuario)
router.delete("/usuarios/:id", eliminarUsuarios)



export default router


