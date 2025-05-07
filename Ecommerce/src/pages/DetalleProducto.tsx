// src/pages/DetalleProducto.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Producto } from "../services/productService";
import { useDispatch } from "react-redux";
import { agregarAlCarrito } from "../store/carritoSlice";

export default function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState<Producto | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProducto(data))
        .catch((err) => console.error("Error al cargar el producto", err));
    }
  }, [id]);

  if (!producto) {
    return <p className="text-center p-4">Cargando producto...</p>;
  }

  const handleAgregarAlCarrito = () => {
    dispatch(
      agregarAlCarrito({
        id: producto.id,
        title: producto.title,
        price: producto.price,
      })
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={producto.image}
          alt={producto.title}
          className="w-48 h-48 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold">{producto.title}</h1>
          <p className="text-xl text-green-600">${producto.price}</p>
          <p className="mt-4 text-gray-700">{producto.description}</p>

          <button
            onClick={handleAgregarAlCarrito}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
