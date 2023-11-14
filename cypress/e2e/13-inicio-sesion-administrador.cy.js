/**
 * HISTORIA DE USUARIO #13
 * INICIO DE SESION COMO ADMINSITRADOR
 * PRUEBAS FUNCIONALES
 * */

describe("Prueba 1 - Email correcto, contraseña correcta", () => {
	it("Debe redirigir a /admin/dashboard", () => {
		cy.visit("http://localhost:1111/admin/login");

		cy.get("#email").type("aless@gmail.com");

		cy.get("#password").type("1234");

		cy.get("#loginForm").click();

		// Verificar que la URL sea "/admin/dashboard"
		cy.url().should("include", "/admin/dashboard");
	});
});

describe("Prueba 2 - Email correcto, contraseña incorrecta", () => {
	it("Mensaje “Access denied. Check password and try again.”", () => {
		cy.visit("http://localhost:1111/admin/login");

		cy.get("#email").type("aless@gmail.com");

		cy.get("#password").type("micontrasena");

		cy.get("#loginForm").click();

		cy.get("#notify_message")
			.should("be.visible")
			.should("contain", "Access denied. Check password and try again.");
	});
});

describe("Prueba 3 - Email incorrecto, contraseña correcta", () => {
	it("Mensaje “A user with that email does not exist.”", () => {
		cy.visit("http://localhost:1111/admin/login");

		cy.get("#email").type("correoincorrecto@gmail.com");

		cy.get("#password").type("1234");

		cy.get("#loginForm").click();

		cy.get("#notify_message")
			.should("be.visible")
			.should("contain", "A user with that email does not exist.");
	});
});

describe("Prueba 4 - Email y contraseñas incorrectas", () => {
	it("Mensaje “A user with that email does not exist.”", () => {
		cy.visit("http://localhost:1111/admin/login");

		cy.get("#email").type("correoincorrecto@gmail.com");

		cy.get("#password").type("123456");

		cy.get("#loginForm").click();

		cy.get("#notify_message")
			.should("be.visible")
			.should("contain", "A user with that email does not exist.");
	});
});
