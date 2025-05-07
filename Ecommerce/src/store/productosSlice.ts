import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Producto } from "../services/productService";


export const fetchProductos = createAsyncThunk(
  "productos/fetchProductos",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Error al obtener productos");
    return await res.json();
  }
);

interface ProductosState {
  items: Producto[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductosState = {
  items: [],
  loading: false,
  error: null,
};

const productosSlice = createSlice({
  name: "productos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error al cargar productos";
      });
  },
});

export default productosSlice.reducer;