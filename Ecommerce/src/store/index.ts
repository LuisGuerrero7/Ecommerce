// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import productosReducer from "./productosSlice";
import carritoReducer from "./carritoSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // usa localStorage por defecto

import { combineReducers } from "redux";

// Combina los reducers
const rootReducer = combineReducers({
  productos: productosReducer,
  carrito: carritoReducer,
});

// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crea el store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
