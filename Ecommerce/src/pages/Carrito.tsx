import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { eliminarDelCarrito } from "../store/carritoSlice";

export default function Carrito() {
  const items = useSelector((state: RootState) => state.carrito.items);
  const dispatch = useDispatch();

  const handleRemover = (id: number) => {
    dispatch(eliminarDelCarrito(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Carrito de Compras</h1>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg">{item.title}</h2>
              <p>${item.price}</p>
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleRemover(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}
