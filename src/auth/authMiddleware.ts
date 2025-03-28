import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

// Hacemos que sea genérica, usando "any" para compatibilidad con rutas que usan parámetros como :id
export const manejoAutorizacion: RequestHandler<any> = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ mensaje: "Token no proporcionado" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).usuario = decoded;
    next();
  } catch (err) {
    res.status(401).json({ mensaje: "Token inválido" });
  }
};
