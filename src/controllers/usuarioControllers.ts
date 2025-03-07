import express, {Request,Response} from "express"

//GET, OBTENER USUARIOS
const obtenerUsuarios = (req: Request,res: Response) => {
    res.json([
        {id:1, nombre: "Luis"},
        {id:2, nombres: "Francesca"}
    ])
}

//POST, CREAR USUARIOS
const crearUsuario = (req: Request, res: Response) => {
    const nuevoUsuario = req.body
    res.status(201).json({mensaje: "Usuario creado", data: nuevoUsuario})
}

//DELETE, ELIMINAR USUARIO
const eliminarUsuarios =  (req: Request, res: Response) => {
    const {id} = req.params
    res.json({mensaje: `Usuario con id ${id} eliminado`})
}

export { obtenerUsuarios, crearUsuario, eliminarUsuarios}
