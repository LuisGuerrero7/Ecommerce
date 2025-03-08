import express , {Response, Request, NextFunction} from "express"

export const manejoErrores = (err: Error, res: Response, req: Request, next: NextFunction) => {
    console.log("Error:", err.message)
    res.status(500).json({mensaje: "Ha ocurrido un error con el servidor"})
}
