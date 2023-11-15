/*
HU - 34
Como administrador deseo contar con un botón 
para crear una nueva orden en el botón de ORDERS 
en la barra lateral izquierda para crear una 
nueva orden.
* PRUEBA FUNCIONAL
*/

describe("Prueba de EDITAR USUARIO en el módulo administrador", () => {
	it("Prueba para editar un usuario correctamente", () => {
		// Primero es necesario loguearse
		cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Users
        cy.get(':nth-child(7) > .nav-link').click();

        //Click en la opción de editar usuario
        cy.get('[href="/admin/user/edit/6552eb0e9941de5724c26fb4"]').click();

        //Edita el campo User Password
        cy.get('#userPassword').type('qazw1234');

        //Edita el campo Password confirm
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('qazw1234');

        //Clickea el botón Update
        cy.get('#btnUserEdit').click();

        //Mensaje de confirmación de que el usuario fue actualizado
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "User account updated");

        cy.wait(1000)
        
	});

    it("Prueba con contraseñas diferentes", () => {
		//Login
		cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Users
        cy.get(':nth-child(7) > .nav-link').click();

        //Click en la opción de editar usuario
        cy.get('[href="/admin/user/edit/6552eb0e9941de5724c26fb4"]').click();

        //Edita el campo User password
        cy.get('#userPassword').type('qazw1234');

        //Edita el campo Password confirm con una contraseña diferente
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('1234qazw');

        //Se da click en el botón Update
        cy.get('#btnUserEdit').click();

        //Se espera el mensaje de que la confirmación de la contraseña es incorrecta
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Password mismatch. Retry");

        cy.wait(1000)
        
	});

    it("Prueba con contraseña corta", () => {
		//Login
		cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Users
        cy.get(':nth-child(7) > .nav-link').click();

        //Click en la opción de editar usuario
        cy.get('[href="/admin/user/edit/6552eb0e9941de5724c26fb4"]').click();

        //Edita el campo User password
        cy.get('#userPassword').type('1');

        //Edita el campo Password confirm
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('1');

        //Hace click en el botón Update
        cy.get('#btnUserEdit').click();

        //Se espera el mensaje donde diga que la contraseña es muy corta
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Password too short");

        cy.wait(1000)
        
	});

    it("Prueba con usuario inválido", () => {
		//Login
		cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Users
        cy.get(':nth-child(7) > .nav-link').click();

        //Click en la opción de editar usuario
        cy.get('[href="/admin/user/edit/6552eb0e9941de5724c26fb4"]').click();

        //Limpia el campo de texto de User y exribe un user incorrecto
        cy.get('#usersName').clear();
        cy.get('#usersName').type('+');

        //Edita el campo User password
        cy.get('#userPassword').type('qazw1234');

        //Edita el campo Password confirm
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('qazw1234');

        //Hace click en el boton Update
        cy.get('#btnUserEdit').click();

        //Muestra el mensaje de que el usuario es inválido
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "User disabled");

        cy.wait(1000)
        
	});

    it("Prueba API key", () => {
		//Login
		cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Users
        cy.get(':nth-child(7) > .nav-link').click();

        //Click en la opción de editar usuario
        cy.get('[href="/admin/user/edit/6552eb0e9941de5724c26fb4"]').click();

        //Click en el check de generar la clave API
        cy.get('#btnGenerateAPIkey').click();

        //Mensaje mostrando que la consulta fue exitosa
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "API Key generated");

        cy.wait(1000)
        
	});

    it("Prueba para crear un Admin", () => {
		//Login
		cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Click en el botón de Users
        cy.get(':nth-child(7) > .nav-link').click();

        //Click en la opción de editar usuario
        cy.get('[href="/admin/user/edit/6552eb0e9941de5724c26fb4"]').click();

        //Limpia el campo Username y lo edita
        cy.get('#usersName').clear();
        cy.get('#usersName').type('Alejo');

        //Edita el campo User password
        cy.get('#userPassword').type('qazw1234');

        //Edita el campo Password confirm
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('qazw1234');

        //Click en el check para hacer al usuario Admin
        cy.get('#userAdmin').click();

        //Click en el botón Update
        cy.get('#btnUserEdit').click();

        //Mensaje de confirmación de que el usuario fue encontrado
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "User account updated");

        cy.wait(1000)
        
	});
});