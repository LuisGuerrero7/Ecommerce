import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Producto } from "../services/productService";

interface CarritoState {
    items: Producto[]
}

const initialState: CarritoState = {
    items: []
}
 
const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers: {
        agregarAlCarrito: (state, action: PayloadAction<Producto>) => {
            state.items.push(action.payload)
        },
        eliminarDelCarrito: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        vaciarCarrito: (state) => {
            state.items = []
        }
    } 
})

export const {agregarAlCarrito, eliminarDelCarrito, vaciarCarrito} = carritoSlice.actions;
export default carritoSlice.reducer