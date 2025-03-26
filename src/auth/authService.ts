import { Usuario } from "../models/Usuario";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUsuario = async (correo: string, password: string) => {
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
        throw new Error("Correo no registrado");
    }

    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) {
        throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
    });

    return { token, usuario };
};
