// src/pages/Carrito.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { eliminarDelCarrito, limpiarCarrito } from "../store/carritoSlice";

export default function Carrito() {
  const items = useSelector((state: RootState) => state.carrito.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Carrito de Compras</h1>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg">{item.title}</h2>
                <p>${item.price} x {item.cantidad}</p>
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => dispatch(eliminarDelCarrito(item.id))}
              >
                Eliminar uno
              </button>
            </div>
          ))}
          <p className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</p>
          <button
            className="bg-yellow-500 text-white px-2 py-1 rounded mt-4"
            onClick={() => dispatch(limpiarCarrito())}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
