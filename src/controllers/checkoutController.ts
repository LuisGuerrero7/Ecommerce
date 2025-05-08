import { Request, Response } from "express";
import { Pedido } from "../models/Pedido";

export const crearPedido = async (req: Request, res: Response) => {
  const { nombre, direccion, telefono, email, productos, total } = req.body;

  if (!nombre || !direccion || !telefono || !email || !productos || !total) {
    res.status(400).json({ mensaje: "Faltan datos del pedido" });
    return;
  }

  try {
    const nuevoPedido = new Pedido({
      nombre,
      direccion,
      telefono,
      email,
      productos,
      total,
    });

    await nuevoPedido.save();

    res.status(201).json({ mensaje: "Pedido confirmado y guardado en la base de datos" });
    return;
  } catch (error) {
    console.error("Error al guardar pedido:", error);
    res.status(500).json({ mensaje: "Error al guardar el pedido" });
    return;
  }
};
