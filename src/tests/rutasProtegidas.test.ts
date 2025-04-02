import request from "supertest";
import app from "../index";
import mongoose from "mongoose";

describe("Pruebas de rutas protegidas", () => {
  let token: string;

  beforeAll(async () => {
    // 🔹 Login con un usuario válido para obtener el token
    const loginResponse = await request(app)
      .post("/api/login")
      .send({
        correo: "fran@email.com",
        password: "123456"
      });

    token = loginResponse.body.token;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Debe acceder a una ruta protegida con token válido", async () => {
    const response = await request(app)
      .get("/api/usuarios")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("Debe rechazar acceso sin token", async () => {
    const response = await request(app)
      .get("/api/usuarios");

    expect(response.status).toBe(401);
    expect(response.body.mensaje).toBe("Token no proporcionado");
  });

  it("Debe rechazar acceso con token inválido", async () => {
    const response = await request(app)
      .get("/api/usuarios")
      .set("Authorization", "Bearer tokenFalso123");

    expect(response.status).toBe(401);
    expect(response.body.mensaje).toBe("Token inválido o expirado");
  });
});
