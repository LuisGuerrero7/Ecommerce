import { Request, Response, RequestHandler } from "express";
import { obtenerProductos, obtenerProductoPorId, crearProducto, actualizarProducto, eliminarProducto } from "../services/productoService";

// Definimos una interfaz para los parámetros de la ruta (ID del producto)
interface RequestParams {
    id: string; // Se espera que el ID sea un string
}

// ✅ GET TODOS LOS PRODUCTOS
export const getProductos: RequestHandler = async (req, res): Promise<void> => {
    try {
        const productos = await obtenerProductos();
        res.json(productos);
        return; // ✅ Finalizar correctamente
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener productos", error });
        return;
    }
};

// ✅ GET PRODUCTO POR ID
export const getProductoPorId: RequestHandler<RequestParams> = async (req, res): Promise<void> => {
    try {
        const producto = await obtenerProductoPorId(req.params.id);
        if (!producto) {
            res.status(404).json({ mensaje: "Producto no encontrado" });
            return;
        }
        res.json(producto);
        return;
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el producto", error });
        return;
    }
};

// ✅ POST CREAR PRODUCTO
export const postProducto: RequestHandler = async (req, res): Promise<void> => {
    try {
        const { nombre, precio, stock, descripcion, categoria } = req.body;

        // ✅ Crear un nuevo producto con todos los datos requeridos
        const nuevoProducto = await crearProducto({
            nombre,
            precio,
            stock,
            descripcion,
            categoria,
        });

        res.status(201).json(nuevoProducto);
        return;
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el producto", error });
        return;
    }
};


// ✅ PUT ACTUALIZAR PRODUCTO
export const putProducto: RequestHandler<RequestParams> = async (req, res): Promise<void> => {
    try {
        const productoActualizado = await actualizarProducto(req.params.id, req.body);
        if (!productoActualizado) {
            res.status(404).json({ mensaje: "Producto no encontrado" });
            return;
        }
        res.json(productoActualizado);
        return;
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el producto", error });
        return;
    }
};

// ✅ DELETE ELIMINAR PRODUCTO
export const deleteProducto: RequestHandler<RequestParams> = async (req, res): Promise<void> => {
    try {
        const productoEliminado = await eliminarProducto(req.params.id);
        if (!productoEliminado) {
            res.status(404).json({ mensaje: "Producto no encontrado" });
            return;
        }
        res.json({ mensaje: "Producto eliminado" });
        return;
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el producto", error });
        return;
    }
};
