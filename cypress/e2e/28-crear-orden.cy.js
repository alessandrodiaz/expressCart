/*
HU - 28
Como administrador deseo contar con un botón 
para crear una nueva orden en el botón de ORDERS 
en la barra lateral izquierda para crear una 
nueva orden.
* PRUEBA FUNCIONAL
*/

describe("Prueba de ORDERS en el módulo administrador", () => {
	it("Prueba para hallar un usuario", () => {
		// Primero es necesario loguearse
		cy.visit("http://localhost:1111/admin/orders");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Orders
        cy.get(':nth-child(5) > .sidebar-link-addon').click();

        //Se rellena el campo de Customer Email Address
        cy.get('#customerEmail').type('alejandromarroquin.com@gmail.com');

        //Se clickea en buscar para hallar al usuario
        cy.get('#lookupCustomer').click();

        //Mensaje de confirmación de que el usuario fue encontrado
        cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Customer found");

        cy.wait(1000)
        
	});

    it("Prueba de usuario no encontrado", () => {
		//Login
		cy.visit("http://localhost:1111/admin/orders");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Orders
        cy.get(':nth-child(5) > .sidebar-link-addon').click();

        //Se rellena el campo de Customer Email Address
        cy.get('#customerEmail').type('alejandromarroquin@gmail.com');

        //Se clickea en buscar para hallar al usuario
        cy.get('#lookupCustomer').click();

        //Mensaje de confirmación de que el usuario fue encontrado
        cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "No customers found");

        cy.wait(1000)
        
	});

    it("Prueba para crear una orden", () => {

        //Se visita el inicio de la aplicación
        cy.visit("http://localhost:1111");

        //Se agrega un producto al carrito para la prueba
        cy.visit("http://localhost:1111/product/Nik");

		// Encuentra el elemento de entrada de cantidad por su ID
		cy.get("#product_quantity").as("inputQuantity");

		// Verifica que el valor inicial sea 1
		cy.get("@inputQuantity").should("have.value", "1");

		// Encuentra el campo de entrada por su ID
		cy.get("#product_quantity")
			// Utiliza el comando type para establecer el valor
			.clear() // Limpiar el valor actual
			.type("1")
			.should("have.value", "1"); // Verifica que el valor se haya establecido correctamente

		// Oprimir botón 'Add to cart'
		cy.get(".product-add-to-cart").click();

		//Login en Admin
        cy.visit("http://localhost:1111/admin/orders");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Orders
        cy.get(':nth-child(5) > .sidebar-link-addon').click();

        //Se rellena el campo de Customer Email Address
        cy.get('#customerEmail').type('alejandromarroquin.com@gmail.com');

        //Se clickea en buscar para hallar al usuario
        cy.get('#lookupCustomer').click();

        //Mensaje de confirmación de que el usuario fue encontrado
        cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Customer found");

        //Se da click en el botón de crear orden
        cy.get('#orderCreate').click();

        //Se debe mostrar el mensaje de  de la creación de la orden
        cy.get("#notify_message")
			.should("be.visible") // Esperar a que el mensaje se muestre
			.should("contain", "Created order");
        
	});

    
});