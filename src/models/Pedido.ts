import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: Number, required: true},
    email: {type: String, required: true},
    productos: [{
        id: Number,
        title: String,
        price: Number,
        cantidad: Number
    },],
    total: {type: Number, required: true},
    date: {type:Date, default: Date.now}
})

export const Pedido = mongoose.model("Pedido", pedidoSchema)