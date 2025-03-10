// src/config/database.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Usuario } from "../models/Usuario";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error("Error conectando a la base de datos", error);
        process.exit(1);
    }
};

