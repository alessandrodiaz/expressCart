/**
 * HISTORIA DE USUARIO #2
 * INICIO DE SESION COMO CLIENTE
 * PRUEBAS FUNCIONALES
 * */

describe("Prueba 1 - Email correcto, contraseña correcta", () => {
	it("Debe redirigir a /customer/account", () => {
		cy.visit("http://localhost:1111/customer/login");

		cy.get("#email").type("adam@gmail.com");

		cy.get("#password").type("1234");

		cy.get("#customerloginForm").click();

		cy.url().should("include", "/customer/account");
	});
});

describe("Prueba 2 - Email correcto, contraseña incorrecta", () => {
	it("Mensaje “Access denied. Check password and try again.”", () => {
		cy.visit("http://localhost:1111/customer/login");

		cy.get("#email").type("adam@gmail.com");

		cy.get("#password").type("nombredemimascota");

		cy.get("#customerloginForm").click();

		cy.get("#notify_message")
			.should("be.visible")
			.should("contain", "Access denied. Check password and try again.");
	});
});

describe("Prueba 3 - Email incorrecto, contraseña correcta", () => {
	it("Mensaje “A customer with that email does not exist.”", () => {
		cy.visit("http://localhost:1111/customer/login");

		cy.get("#email").type("correoincorrecto@gmail.com");

		cy.get("#password").type("1234");

		cy.get("#customerloginForm").click();

		cy.get("#notify_message")
			.should("be.visible")
			.should("contain", "A customer with that email does not exist.");
	});
});

describe("Prueba 4 - Email y contraseñas incorrectas", () => {
	it("Mensaje “A customer with that email does not exist.”", () => {
		cy.visit("http://localhost:1111/customer/login");

		cy.get("#email").type("correoincorrecto@gmail.com");

		cy.get("#password").type("123456");

		cy.get("#customerloginForm").click();

		cy.get("#notify_message")
			.should("be.visible")
			.should("contain", "A customer with that email does not exist.");
	});
});
