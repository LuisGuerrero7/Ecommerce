// src/components/ProductList.tsx
import { useEffect, useState } from "react";

interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductList() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {productos.map((producto) => (
        <div key={producto.id} className="border p-4 rounded-lg shadow">
          <img
            src={producto.image}
            alt={producto.title}
            className="h-40 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">{producto.title}</h2>
          <p className="text-gray-600">${producto.price}</p>
        </div>
      ))}
    </div>
  );
}
