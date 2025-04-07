export interface Producto {
    id: number;
    title : string;
    price: number;
    description: string;
    image: string
}

export const obtenerProductos = async (): Promise<Producto[]> =>  {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
            throw new Error("Error al obtener productos")
        }
        return await res.json()
    }
    catch (error){
        console.error("Error en productService", error)
        throw error
    }
}
