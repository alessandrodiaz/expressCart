/**
 * HISTORIA DE USUARIO #1
 * AGREGAR PRODUCTOS AL CARRITO
 * -> USANDO LOS BOTONES DE '-' y '+'
 * PRUEBAS FUNCIONALES
 * */

describe("Prueba de valor debajo del límite inferior", () => {
	it("Cuando el valor esté en 1 y se hace clic en el botón '-', el valor debe seguir siendo 1, al oprimir el botón 'ADD TO CART' mostrar mensaje exitoso", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón "-" para disminuir el valor
		cy.get("@inputQuantity").prev(".input-group-prepend").find(".qty-btn-minus").click();

		// Oprimir botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		// Verifica que el valor siga siendo 1
		cy.get("@inputQuantity").should("have.value", "1");

		cy.wait(1000);
		// cy.get("#notify_message").should("be.visible").and("contain", "Cart successfully updated");
		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Cart successfully updated"); // Verificar que el mensaje contenga el texto deseado
		// .should("not.be.visible") // Esperar a que el mensaje desaparezca
		// .should("not.exist"); // Verificar que el mensaje ya no existe en el DOM
	});
});

describe("Prueba de valor en el límite inferior", () => {
	it("El valor debe estar en 1 al ingresar a la página, al oprimir el botón ADD TO CART mostrar mensaje exitoso", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Cart successfully updated"); // Verificar que el mensaje contenga el texto deseado
	});
});

describe("Prueba de valor encima del límite inferior", () => {
	it("El valor debe estar en 2 oprimiendo una vez el botón '-', al oprimir el botón ADD TO CART mostrar mensaje exitoso", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Presionar una vez el boton
		cy.get("@inputQuantity").next(".input-group-append").find(".qty-btn-plus").click();

		// Verificar que la cantidad sean 2 unidades
		cy.get("@inputQuantity").should("have.value", "2");

		// Presionar botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Cart successfully updated"); // Verificar que el mensaje contenga el texto deseado
	});
});

describe("Prueba de valor debajo del límite superior", () => {
	it("El valor debe estar en 24 oprimiendo el botón '-' 23 veces, al oprimir el botón ADD TO CART mostrar mensaje exitoso", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón de aumento (incremento) de cantidad 24 veces
		for (let i = 0; i < 23; i++) {
			cy.get("@inputQuantity").next(".input-group-append").find(".qty-btn-plus").click();
		}

		// Verificar que la cantidad sean 24 unidades
		cy.get("@inputQuantity").should("have.value", "24");

		// Presionar botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Cart successfully updated"); // Verificar que el mensaje contenga el texto deseado
	});
});

describe("Prueba de valor en el límite superior", () => {
	it("El valor debe estar en 25 oprimiendo el botón '-' 24 veces, al oprimir el botón ADD TO CART mostrar mensaje exitoso", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón de aumento (incremento) de cantidad 24 veces
		for (let i = 0; i < 24; i++) {
			cy.get("@inputQuantity").next(".input-group-append").find(".qty-btn-plus").click();
		}

		// Verificar que la cantidad sean 25 unidades
		cy.get("@inputQuantity").should("have.value", "25");

		// Presionar botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Cart successfully updated"); // Verificar que el mensaje contenga el texto deseado
	});
});

describe("Prueba de valor encima del límite superior", () => {
	it("El valor debe estar en 26 oprimiendo el botón '-' 25 veces, al oprimir el botón ADD TO CART mostrar mensaje de error", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón de aumento (incremento) de cantidad 25 veces
		for (let i = 0; i < 25; i++) {
			cy.get("@inputQuantity").next(".input-group-append").find(".qty-btn-plus").click();
		}

		// Verificar que la cantidad sean 26 unidades
		cy.get("@inputQuantity").should("have.value", "26");

		// Presionar botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should(
				"contain",
				"The quantity exceeds the max amount. Please contact us for larger orders."
			); // Verificar que el mensaje contenga el texto deseado
	});
});
