// src/index.ts
import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes";
import { conectarDB } from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", usuarioRoutes);

conectarDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
