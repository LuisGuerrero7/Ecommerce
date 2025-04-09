import { configureStore } from "@reduxjs/toolkit";
import productosReducer from "./productosSlice";

export const store = configureStore({
    reducer: {
        productos: productosReducer
    }
})

// Tipado automático para todo el estado y el dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
