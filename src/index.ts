import express, { Request, Response , NextFunction} from "express";
import usuarioRoutes from "./routes/usuarioRoutes";
import { networkInterfaces } from "os";
import { manejoErrores } from "./middleware/manejoErrores";

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use("/API", usuarioRoutes)

//Middleware global para logear cada solicitud
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Method: ${req.method} - Route: ${req.path}`)
    next() //Pasar al siguiente Middleware o ruta
})


// Ruta principal
app.get("/", (req: Request, res: Response) => {
    res.send("¡Hola desde TypeScript con Express!");
});


//Manejo de errores al final de todas las rutas
app.use(manejoErrores)

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});