import { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import { Usuario } from "../models/Usuario";

export const register: RequestHandler = async (req, res) => {
    try {
        const {nombre, correo, password} = req.body

        if(!nombre || !correo || !password){
            res.status(400).json({mensaje: "Todos los campos son obligatorios"});
            return;
        }

        const usuarioExistente = await Usuario.findOne({correo})
        if (usuarioExistente) {
            res.status(409).json({ mensaje: "El correo ya está registrado" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const nuevoUsuario = new Usuario({
            nombre,
            correo,
            password: hashedPassword
        })

        await nuevoUsuario.save()

        res.status(201).json({mensaje: "El usuario ha sido creado exitosamente"});
        return;
    }
    catch (error){
        res.status(500).json({mensaje: "Error al registrar el usuarios", error});
        return;
    }
}