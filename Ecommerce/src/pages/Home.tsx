// src/pages/Home.tsx
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Productos disponibles</h1>
      <ProductList />
    </div>
  );
}
