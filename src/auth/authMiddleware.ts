import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const manejoAutorizacion: RequestHandler<any> = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ mensaje: "Token no proporcionado" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).usuario = decoded; // Puedes guardar el usuario para usarlo después
    next();
  } catch (err) {
    res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};
