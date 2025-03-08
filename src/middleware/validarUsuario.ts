// src/middleware/validarUsuario.ts
import { Request, Response, NextFunction, RequestHandler } from "express";
import { rmSync } from "fs";

export const validarUsuario: RequestHandler = (req, res, next) => {
    const { nombre, edad } = req.body;
    
    if (!nombre || !edad) {
        res.status(400).json({ mensaje: "Nombre y edad son requeridos" });
        return; // 🚨 Importante: Asegura que la función devuelva void
    }

    if(typeof nombre !== "string"){
        res.status(400).json({mensaje: "El nombre debe ser compuesto por letras"})
        return;
    }
    
    if (typeof edad !== "number") {
        res.status(400).json({ mensaje: "La edad debe ser un número" });
        return; // 🚨 Importante: Detiene la ejecución de la función
    }
    
    next(); // Llama al siguiente middleware si todo está bien
};
