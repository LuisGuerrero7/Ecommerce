import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const manejoAutorizacion = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ mensaje: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).usuario = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ mensaje: "Token inválido" });
    }
};
