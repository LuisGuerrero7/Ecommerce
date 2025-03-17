import {z} from "zod"
import { RequestHandler } from "express"

export const usuarioSchema = z.object({
    nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    edad: z.number().min(18, "El usuario debe ser mayor de edad").max(99, "El usuario debe ser menor a 100"),
    correo: z.string().email("El correo debe ser valido").optional()
})
