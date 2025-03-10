import express, {Request,Response, RequestHandler} from "express"
import { crearUsuario, obtenerUsuarios, obtenerUsuariosPorId, eliminarUsuario, actualizarUsuario } from "../services/usuarioService"

interface RequestParams {
    id: string
}


//GET, OBTENER USUARIOS
export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await obtenerUsuarios()
    res.json(usuarios)
}

//GET X ID
export const getUsuarioPorId: RequestHandler<RequestParams> = async (req, res) => {
    try {
        const usuario = await obtenerUsuariosPorId(req.params.id);
        if (!usuario) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el usuario", error });
    }
};

//POST 
export const postUsuario = async (req: Request, res: Response) => {
    const {nombre, edad} = req.body
    const usuario = await crearUsuario(nombre, edad)
    res.status(201).json(usuario)
}


//PUT, CREAR USUARIOS
export const putUsuario: RequestHandler<RequestParams> = async (req, res) => {
    try {
        const usuario = await actualizarUsuario(req.params.id, req.body);
        if (!usuario) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el usuario", error });
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
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el usuario", error });
    }
};