// src/store/carritoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  price: number;
  cantidad: number;
}

interface CarritoState {
  items: Item[];
}

const initialState: CarritoState = {
  items: [],
};

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    agregarAlCarrito: (state, action: PayloadAction<{ id: number; title: string; price: number }>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.cantidad++;
      } else {
        state.items.push({ ...action.payload, cantidad: 1 });
      }
    },
    eliminarDelCarrito: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        if (item.cantidad > 1) {
          item.cantidad--;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
    limpiarCarrito: (state) => {
      state.items = [];
    },
  },
});

export const { agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } = carritoSlice.actions;

export default carritoSlice.reducer;
