/**
 * HISTORIA DE USUARIO #1
 * AGREGAR PRODUCTOS
 * PRUEBAS FUNCIONALES
 * */

describe("Prueba 1 - Números negativos", () => {
	it("Se ingresa un valor negativo (-2) y al usar el botón 'Add to cart' se tendrá que mostrar un mensaje de advertencia", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Encuentra el campo de entrada por su ID
		cy.get("#product_quantity")
			// Utiliza el comando type para establecer el valor
			.clear() // Limpiar el valor actual
			.type("-2")
			.should("have.value", "-2"); // Verifica que el valor se haya establecido correctamente

		// Oprimir botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Quantity cannot be less than 1");
	});
});

describe("Prueba 2 - Número cero", () => {
	it("Se ingresa el valor de 0 y al usar el botón 'Add to cart' se tendrá que mostrar un mensaje de advertencia", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Encuentra el campo de entrada por su ID
		cy.get("#product_quantity")
			// Utiliza el comando type para establecer el valor
			.clear() // Limpiar el valor actual
			.type("0")
			.should("have.value", "0"); // Verifica que el valor se haya establecido correctamente

		// Oprimir botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Quantity cannot be less than 1");
	});
});

describe("Prueba 3 - Números positivos dentro del rango", () => {
	it("Se ingresa el valor de 20 y al usar el botón 'Add to cart' se tendrá que mostrar mensaje de confirmación exitoso", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Encuentra el campo de entrada por su ID
		cy.get("#product_quantity")
			// Utiliza el comando type para establecer el valor
			.clear() // Limpiar el valor actual
			.type("20")
			.should("have.value", "20"); // Verifica que el valor se haya establecido correctamente

		// Oprimir botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Cart successfully updated"); // Verificar que el mensaje contenga el texto deseado
	});
});

describe("Prueba 4 - Números fuera del rango válido", () => {
	it("Se ingresa el valor de 29 y se tendrá que mostrar mensaje de advertencia", () => {
		// Visita la página que contiene el elemento de entrada de cantidad
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Encuentra el campo de entrada por su ID
		cy.get("#product_quantity")
			// Utiliza el comando type para establecer el valor
			.clear() // Limpiar el valor actual
			.type("29")
			.should("have.value", "2"); // Verifica que el valor se haya establecido correctamente

		// // Oprimir botón 'Add to cart'
		// cy.get(".product-add-to-cart").click();

		cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Exceeds maximum quantity: 25"); // Verificar que el mensaje contenga el texto deseado
	});
});
