import  {Producto,IProducto} from "../models/Producto";

//OBTENER TODOS LOS PRODUCTOS
export const obtenerProductos = async (): Promise<IProducto[]> => {
    return await Producto.find()
}

export const obtenerProductoPorId = async (id: string): Promise<IProducto | null>  => {
    return await Producto.findById(id)
}

export const crearProducto = async (productoData: IProducto) => {
    const nuevoProducto = new Producto(productoData);
    return await nuevoProducto.save();
};

export const actualizarProducto = async(id: string, datos: Partial<IProducto>): Promise<IProducto | null> => {
    return await Producto.findByIdAndUpdate(id,datos, {new : true})
}

export const eliminarProducto = async(id: string): Promise<IProducto | null > => {
    return await Producto.findByIdAndDelete(id)
}
