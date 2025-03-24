import express from "express"; 
import dotenv from "dotenv";
import { conectarDB } from "./config/database";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware y rutas
app.use(express.json());

import usuarioRoutes from "./routes/usuarioRoutes";
import productoRoutes from "./routes/productoRoutes";

app.use("/api", usuarioRoutes);
app.use("/api", productoRoutes);

import authRoutes from "./auth/authRoutes";
app.use("/api", authRoutes);

// Ruta raíz para verificar el estado de la API
app.get("/", (req, res) => {
    res.send("API funcionando correctamente 🚀");
});

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