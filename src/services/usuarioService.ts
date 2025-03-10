import { Usuario } from "../models/Usuario";

//CREATE
export const crearUsuario = async (nombre: string, edad: number) => {
    const nuevoUsuario = new Usuario({nombre,edad})
    return await nuevoUsuario.save()
}

// READ
export const obtenerUsuarios = async () => {
    return await Usuario.find().lean()
}

// READ BY ID
export const obtenerUsuariosPorId = async (id: string) => {
    return await Usuario.findById(id).lean()
}

//UPDATE
export const actualizarUsuario = async (id: string, data: Partial<{nombre: string, edad: number, activo: boolean}>) => {
    return await Usuario.findByIdAndUpdate(id, data, {new: true})
} 

export const eliminarUsuario = async (id: string) => {
    return await Usuario.findByIdAndDelete(id)
}

