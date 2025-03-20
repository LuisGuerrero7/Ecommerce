import request from "supertest";
import app from "../index";
import mongoose from "mongoose";

describe("Pruebas de la API de Usuarios", () => {
    afterAll(async () => {
        await mongoose.connection.close(); // 🔹 Cierra MongoDB después de los tests
    });

    it("Debe crear un usuario con datos válidos", async () => {
        const response = await request(app)
            .post("/api/usuarios")
            .send({ nombre: "Luis", edad: 25, correo: "luis@test.com" });

        expect(response.status).toBe(201);
        expect(response.body.nombre).toBe("Luis");
    });

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

    it("Debe responder con 404 en una ruta no existente", async () => {
        const response = await request(app).get("/ruta-inexistente");
        expect(response.status).toBe(404);
    });
});


// tests/
//    ├── unit/
//    │   ├── calculadora.test.ts
//    │   ├── helpers.test.ts
//    ├── integration/
//    │   ├── usuario.test.ts
//    │   ├── producto.test.ts
//    ├── e2e/
//    │   ├── login.spec.js
//    │   ├── carrito.spec.js

// Crea un test unitario en tests/unit/ para una función que calcule el precio total de un carrito de compras.
// ✅ Crea un test de integración en tests/integration/ para verificar que una API devuelve los productos correctamente.

// Si quieres mejorar aún más, intenta agregar un test E2E con Cypress para probar el login de tu aplicación. 🚀
