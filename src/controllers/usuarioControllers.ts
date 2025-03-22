import express, {Request,Response, RequestHandler} from "express"
import { crearUsuario, obtenerUsuarios, obtenerUsuariosPorId, eliminarUsuario, actualizarUsuario } from "../services/usuarioService"
import { z } from "zod"
import { usuarioSchema } from "../schema/usuarioSchema";

interface RequestParams {
    id: string
}

//GET, OBTENER USUARIOS
export const getUsuarios: RequestHandler = async (req, res) => {
    try {
        const usuarios = await obtenerUsuarios();
        if (usuarios.length === 0) {
            res.status(404).json({ mensaje: "No hay usuarios registrados" });
            return;
        }
        res.status(200).json(usuarios);
        return;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
        return;
    }
};

//GET X ID
export const getUsuarioPorId: RequestHandler<RequestParams> = async (req, res) => {
    try {
        const usuario = await obtenerUsuariosPorId(req.params.id);
        if (!usuario) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuario);
        return;
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el usuario", error });
        return;
    }
};

//POST 
export const postUsuario: RequestHandler = async (req, res) => {
    try {
        const validacion = usuarioSchema.safeParse(req.body);
        if (!validacion.success) {
            res.status(400).json({ errores: validacion.error.errors });
            return;
        }

        const { nombre, edad, correo } = validacion.data;
        const usuario = await crearUsuario(nombre, edad);
        res.status(201).json(usuario);
        return;
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
        return;
    }
};


//PUT, CREAR USUARIOS
export const putUsuario: RequestHandler<RequestParams> = async (req, res) => {
    try {
        const usuario = await actualizarUsuario(req.params.id, req.body);
        if (!usuario) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuario);
        return;
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el usuario", error });
        return;
    }
};

//DELETE, ELIMINAR USUARIO
export const deleteUsuario: RequestHandler<RequestParams> = async (req, res) => {
    try {
        const usuario = await eliminarUsuario(req.params.id);
        if (!usuario) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json({ mensaje: "Usuario eliminado" });
        return;
    } catch (error) {
        console.log("Error al eliminar usuario", error)
        res.status(500).json({ mensaje: "Error al eliminar el usuario"});
        return;
    }
};