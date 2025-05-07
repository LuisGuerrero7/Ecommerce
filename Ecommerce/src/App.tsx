// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalleProducto from "./pages/DetalleProducto";
import Navbar from "./components/Navbar";
import Carrito from "./pages/Carrito";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </Router>
  );
}
