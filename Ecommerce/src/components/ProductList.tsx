import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerProductos, Producto } from "../services/productService";

export default function ProductList() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (err) {
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {productos.map((producto) => (
        <div key={producto.id} className="border p-4 rounded-lg shadow">
          <Link to={`/producto/${producto.id}`}>
            <img
              src={producto.image}
              alt={producto.title}
              className="h-40 mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold">{producto.title}</h2>
          </Link>
          <p className="text-gray-600">${producto.price}</p>
        </div>
      ))}
    </div>
  );
}
