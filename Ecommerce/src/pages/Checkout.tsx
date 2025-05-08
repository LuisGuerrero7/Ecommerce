// src/pages/Checkout.tsx
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { limpiarCarrito } from "../store/carritoSlice";
import { useState } from "react";

interface FormData {
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

export default function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const items = useSelector((state: RootState) => state.carrito.items);
  const dispatch = useDispatch();
  const [mensaje, setMensaje] = useState("");

  const total = items.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  const onSubmit = async (data: FormData) => {
    const pedido = { ...data, productos: items, total };
    try {
      const res = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });
      if (res.ok) {
        setMensaje("¡Pedido enviado con éxito!");
        dispatch(limpiarCarrito());
      } else {
        setMensaje("Error al enviar pedido");
      }
    } catch (error) {
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("nombre", { required: "Nombre requerido" })} placeholder="Nombre" className="border p-2 w-full" />
        {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}

        <input {...register("direccion", { required: "Dirección requerida" })} placeholder="Dirección" className="border p-2 w-full" />
        {errors.direccion && <span className="text-red-500">{errors.direccion.message}</span>}

        <input {...register("telefono", { required: "Teléfono requerido" })} placeholder="Teléfono" className="border p-2 w-full" />
        {errors.telefono && <span className="text-red-500">{errors.telefono.message}</span>}

        <input {...register("email", { required: "Email requerido" })} placeholder="Email" className="border p-2 w-full" />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Confirmar pedido
        </button>

      </form>

      <h2 className="text-xl mt-6 mb-2">Resumen</h2>
      {items.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title} x {item.cantidad}</span>
          <span>${(item.price * item.cantidad).toFixed(2)}</span>
        </div>
      ))}
      <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>

      {mensaje && <p className="mt-4 text-center text-green-600">{mensaje}</p>}
    </div>
  );
}
