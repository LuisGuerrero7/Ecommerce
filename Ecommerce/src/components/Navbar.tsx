import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cantidadItems = useSelector((state: RootState) => state.carrito.items.length);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        E-commerce
      </Link>

      <Link to="/carrito" className="relative">
        🛒
        {cantidadItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {cantidadItems}
          </span>
        )}
      </Link>
    </nav>
  );
}
