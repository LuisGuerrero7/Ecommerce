import { Schema, model, Document } from "mongoose";

interface IUsuario extends Document {
    nombre: string;
    edad: number;
    activo: boolean
}

const UsuarioSchema = new Schema<IUsuario>({
    nombre : {type: String, required: true},
    edad: {type: Number, required: true},
    activo: {type: Boolean, default: true}
})

export const Usuario = model<IUsuario>("Usuario", UsuarioSchema)
