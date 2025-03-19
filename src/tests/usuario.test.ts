// tests/usuario.test.ts
import request from "supertest";
import app from ".."; // Asegúrate de exportar `app` desde `index.ts`
import mongoose from "mongoose";

describe("Pruebas de la API de Usuarios", () => {
    afterAll(async()=>{
        await mongoose.connection.close()
    })
    it("Debe crear un usuario con datos válidos", async () => {
        const response = await request(app)
            .post("/api/usuarios")
            .send({ nombre: "Luis", edad: 25, correo: "luis@test.com" });

        expect(response.status).toBe(201);
        expect(response.body.nombre).toBe("Luis");
        
    },100000);

    it("Debe rechazar un usuario con nombre corto", async () => {
        const response = await request(app)
            .post("/api/usuarios")
            .send({ nombre: "Li", edad: 25 });

        expect(response.status).toBe(400);
    });

    it("Debe rechazar un usuario con edad inválida", async () => {
        const response = await request(app)
            .post("/api/usuarios")
            .send({ nombre: "Pedro", edad: 15 });

        expect(response.status).toBe(400);
    });
    it("Debe de responder con 404 a una ruta no existente", async () => {
        const response = await request(app).get("/ruta-inexistente")
        expect(response.status).toBe(404)
    })
});
