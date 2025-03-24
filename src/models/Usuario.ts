import { Schema, model, Document } from "mongoose";

interface IUsuario extends Document {
    nombre: string;
    edad: number;
    activo: boolean;
    correo: string;
    password: string;
}

const UsuarioSchema = new Schema<IUsuario>({
    nombre : {type: String, required: true},
    edad: {type: Number},
    activo: {type: Boolean, default: true},
    correo: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

export const Usuario = model<IUsuario>("Usuario", UsuarioSchema)