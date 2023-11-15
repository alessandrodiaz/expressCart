/**
 * HISTORIA DE USUARIO #1
 * AGREGAR PRODUCTOS AL CARRITO
 * PRUEBAS FUNCIONALES
 * */

describe("Prueba de valor debajo del límite inferior", () => {
	it("Agregando un producto, cuando el valor esté en 1 y se hace clic en el botón '-', el valor debe seguir siendo 1", () => {
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Oprimir botón 'Add to cart' para agregar un producto
		cy.get(".product-add-to-cart").click();

		// Abrir carrito
		cy.contains("Cart").click();

		cy.wait(500);

		// Obtener campo de unidades del producto
		cy.get(".cart-product-quantity").as("inputQuantity");

		// Verifica que el valor sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón "-" para disminuir el valor
		cy.get("@inputQuantity").prev(".input-group-prepend").find(".btn-qty-minus").click();

		// Verifica que el valor siga siendo 1
		cy.get("@inputQuantity").should("have.value", "1");
	});
});

describe("Prueba de valor en el límite inferior", () => {
	it("Agregando un producto, el valor debe estar en 1 al ingresar al carrito", () => {
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Oprimir botón 'Add to cart' para agregar un producto
		cy.get(".product-add-to-cart").click();

		// Abrir carrito
		cy.contains("Cart").click();

		cy.wait(500);

		// Obtener campo de unidades del producto
		cy.get(".cart-product-quantity").as("inputQuantity");

		// Verifica que el valor sea 1
		cy.get("@inputQuantity").should("have.value", "1");
	});
});

describe("Prueba de valor encima del límite inferior", () => {
	it("Agregando un producto, el valor debe estar en 2 oprimiendo una vez el botón '+'", () => {
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Oprimir botón 'Add to cart' para agregar un producto
		cy.get(".product-add-to-cart").click();

		// Abrir carrito
		cy.contains("Cart").click();

		cy.wait(500);

		// Obtener campo de unidades del producto
		cy.get(".cart-product-quantity").as("inputQuantity");

		// Verifica que el valor sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón "+"
		cy.get(".btn-qty-add").click();

		// Verifica que el valor sea 2
		cy.get("@inputQuantity").should("have.value", "2");
	});
});

describe("Prueba de valor debajo del límite superior", () => {
	it("Agregando un producto, el valor debe estar en 24 oprimiendo el botón '-' 23 veces", () => {
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Oprimir botón 'Add to cart' para agregar un producto
		cy.get(".product-add-to-cart").click();

		// Abrir carrito
		cy.contains("Cart").click();

		cy.wait(500);

		// Obtener campo de unidades del producto
		cy.get(".cart-product-quantity").as("inputQuantity");

		// Verifica que el valor sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón de aumento (incremento) de cantidad 24 veces
		for (let i = 0; i < 23; i++) {
			cy.get(".btn-qty-add").click();
		}

		cy.wait(500);

		// Verifica que el valor sea 2
		cy.get("@inputQuantity").should("have.value", "24");
	});
});

describe("Prueba de valor en el límite superior", () => {
	it("El valor debe estar en 25 oprimiendo el botón '-' 24 veces", () => {
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Oprimir botón 'Add to cart' para agregar un producto
		cy.get(".product-add-to-cart").click();

		// Abrir carrito
		cy.contains("Cart").click();

		cy.wait(500);

		// Obtener campo de unidades del producto
		cy.get(".cart-product-quantity").as("inputQuantity");

		// Verifica que el valor sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón de aumento (incremento) de cantidad 24 veces
		for (let i = 0; i < 24; i++) {
			cy.get(".btn-qty-add").click();
		}

		cy.wait(500);

		// Verifica que el valor sea 2
		cy.get("@inputQuantity").should("have.value", "25");
	});
});

describe("Prueba de valor encima del límite superior", () => {
	it("El valor debe estar en 25 oprimiendo el botón '-' 25 veces", () => {
		cy.visit("http://localhost:1111/product/nike-revolution-6");

		// Oprimir botón 'Add to cart' para agregar un producto
		cy.get(".product-add-to-cart").click();

		// Abrir carrito
		cy.contains("Cart").click();

		cy.wait(500);

		// Obtener campo de unidades del producto
		cy.get(".cart-product-quantity").as("inputQuantity");

		// Verifica que el valor sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Hacer clic en el botón de aumento (incremento) de cantidad 24 veces
		for (let i = 0; i < 25; i++) {
			cy.get(".btn-qty-add").click();
		}

		cy.wait(500);

		// Verifica que el valor sea 2
		cy.get("@inputQuantity").should("have.value", "25");
	});
});
