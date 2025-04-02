import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde .env

const MONGO_URI = process.env.MONGO_URI as string; 

export const conectarDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Conectado a la base de datos en MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error conectando a la base de datos:", error);
        process.exit(1);
    }
};
