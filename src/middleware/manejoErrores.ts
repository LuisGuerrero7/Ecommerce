// src/middleware/manejoErrores.ts
import { Request, Response, NextFunction } from "express";

export const manejoErrores = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", err.message);
    res.status(500).json({ mensaje: "Ha ocurrido un error en el servidor" });
};
