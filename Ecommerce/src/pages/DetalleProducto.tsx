import { useParams } from "react-router-dom";
import { Producto } from "../services/productService";
import { useState, useEffect } from "react";

export default function DetalleProducto() {
  const { id } = useParams();

  const [producto, setProducto] = useState<Producto | null>(null)

  useEffect( () => {
    if(id){
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProducto(data))
        .catch((err) => console.error("Error al cargar producto", err))
    }
  },[id])

  if(!producto){
    return 
        <p className="text-center p-4">Cargando producto...</p>
  }

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
        </div>
      </div>
    </div>
  );
}
