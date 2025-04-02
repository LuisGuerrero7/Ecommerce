import request from "supertest";
import app from "../index";

describe("Pruebas de autenticación", () => {

  it("Debe hacer login correctamente con datos válidos", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({
        correo: "fran@email.com",
        password: "123456"
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body.usuario).toHaveProperty("correo", "fran@email.com");
  });

  it("Debe rechazar login con contraseña incorrecta", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({
        correo: "fran@email.com",
        password: "contrasenaIncorrecta"
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("mensaje", "Contraseña incorrecta");
  });

});
