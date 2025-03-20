import express from "express";
import dotenv from "dotenv";
import { conectarDB } from "./config/database";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware y rutas
app.use(express.json());
import usuarioRoutes from "./routes/usuarioRoutes";
app.use("/api", usuarioRoutes);

// Conectar a la base de datos
conectarDB();

// 🔹 Solo iniciar el servidor si NO está en modo de pruebas
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

// 🔹 Exportar app para Jest
export default app;
