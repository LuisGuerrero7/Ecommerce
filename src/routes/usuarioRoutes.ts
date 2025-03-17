// src/routes/usuarioRoutes.ts
import { Router } from "express";
import { getUsuarios, postUsuario, getUsuarioPorId, putUsuario, deleteUsuario } from "../controllers/usuarioControllers";
import { validarUsuario } from "../middleware/validarUsuario";
import { usuarioSchema } from "../schema/usuarioSchema";
import { validarDatos } from "../middleware/validarDatos";

const router = Router();

router.post("/usuarios", validarDatos(usuarioSchema), postUsuario);   // Create
router.get("/usuarios", getUsuarios);                    // Read All
router.get("/usuarios/:id", getUsuarioPorId);            // Read by ID
router.put("/usuarios/:id", putUsuario);                 // Update
router.delete("/usuarios/:id", deleteUsuario);           // Delete

export default router;