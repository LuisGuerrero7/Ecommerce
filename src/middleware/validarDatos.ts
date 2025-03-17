// src/middleware/validarDatos.ts
import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodError, ZodSchema } from "zod";

// Middleware de validación genérico
export const validarDatos = (schema: ZodSchema): RequestHandler => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({ mensaje: "Datos inválidos", errores: error.errors });
                return
            }
            res.status(500).json({ mensaje: "Error en la validación" });
            return
        }
    };
};
