import { Schema, model } from "mongoose";

// Interfaz para Producto
export interface IProducto {
    nombre: string;
    precio: number;
    stock: number;
    descripcion?: string;
    categoria?: string;
}

// Esquema de Producto en MongoDB
const productoSchema = new Schema<IProducto>({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    descripcion: { type: String },
    categoria: { type: String }
});

export const Producto = model<IProducto>("Producto", productoSchema);
