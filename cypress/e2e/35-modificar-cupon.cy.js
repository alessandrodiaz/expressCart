/* 
HU - 35
Como administrador deseo editar las opciones 
de un cupón ya creado, tales como el código 
de descuento, el tipo, el valor y las fechas 
de aplicación
*/

describe('Prueba para crear un CUPóN como administrador', () => {
    it('Pruebas cambio de nombre de un cupón', () => {

        // Primero es necesario loguearse
        cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Se da click en el botón Discount codes
        cy.get('.mb-2 > :nth-child(4) > .nav-link').click();

        //Se da click en el botón Edit
        cy.get('.text-right > .btn-outline-success').click();

        //Se cambia el nombre del cupón
        cy.get('#discountCode')
            .clear()
            .type("CODE2");

        //Se da click en Update para guardar los cambios
        cy.get('.float-right > .btn').click();

        //Mensaje de confirmación de que el cupón fue actualizado
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Successfully saved");

        cy.wait(1000)

    });

    it('Pruebas cambio de tipo de un cupón', () => {

        // Primero es necesario loguearse
        cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Se da click en el botón Discount codes
        cy.get('.mb-2 > :nth-child(4) > .nav-link').click();

        //Se da click en el botón Edit
        cy.get('.text-right > .btn-outline-success').click();

        //Se da click en la opción de Discount type y se cambia la opción
        cy.get('#discountType').select('percent');

        //Se da click en Update para guardar los cambios
        cy.get('.float-right > .btn').click();

        //Mensaje de confirmación de que el cupón fue actualizado
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Successfully saved");

        cy.wait(1000)

    });

    it('Pruebas cambio a valor inválido de un cupón', () => {

        // Primero es necesario loguearse
        cy.visit("http://localhost:1111/admin/users");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get("#loginForm").click();

        //Se llega al dashboard del admin
        cy.url().should('include', "http://localhost:1111/admin/dashboard");

        //Se da click en el botón Discount codes
        cy.get('.mb-2 > :nth-child(4) > .nav-link').click();

        //Se da click en el botón Edit
        cy.get('.text-right > .btn-outline-success').click();

        //Se cambia el nombre del cupón
        cy.get('#discountCode')
            .clear()
            .type("CODE2");

        //Se rellena el campo de Discount value con un valor erróneo
        cy.get('#discountValue')
            .clear()
            .type(-3);

        //Se da click en Update para guardar los cambios
        cy.get('.float-right > .btn').click();

        //Mensaje de confirmación de que el cupón fue actualizado
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Invalid value");

        cy.wait(1000)

    });

    it('Pruebas cambio fecha inválida un cupón', () => {
        cy.visit("http://localhost:1111/admin/users");
    
        // Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');
    
        // Hacer clic en el botón de login
        cy.get("#loginForm").click();
    
        // Verificar que se haya iniciado sesión correctamente
        cy.url().should('include', "http://localhost:1111/admin/dashboard");
    
        // Hacer clic en el botón Discount codes
        cy.get('.mb-2 > :nth-child(4) > .nav-link').click();
    
        // Hacer clic en el botón Edit
        cy.get('.text-right > .btn-outline-success').click();
    
        //Click en la el botón para cambiar la fecha
        cy.get(':nth-child(5) > .form-group > .gj-datepicker > .input-group-append > .btn').click()

        //Se ajusta la fecha un día atras
        cy.get('[style="display: block;"] > .gj-picker > [role="body"] > table > tbody > :nth-child(3) > [day="14"] > div').click();
        cy.get('[style="display: block;"] > .gj-picker > .modal-footer > :nth-child(2)').click();

        //Se da click en Update para guardar los cambios
        cy.get('.float-right > .btn').click();

        //Mensaje de confirmación de que la fecha es inválida
        cy.get("#notify_message")
            .should("be.visible")
            .should('contain', 'Discount start date needs to be after today');
        
    });

    it('Pruebas cambio fecha terminación de un cupón', () => {
        cy.visit("http://localhost:1111/admin/users");
    
        // Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');
    
        // Hacer clic en el botón de login
        cy.get("#loginForm").click();
    
        // Verificar que se haya iniciado sesión correctamente
        cy.url().should('include', "http://localhost:1111/admin/dashboard");
    
        // Hacer clic en el botón Discount codes
        cy.get('.mb-2 > :nth-child(4) > .nav-link').click();
    
        // Hacer clic en el botón Edit
        cy.get('.text-right > .btn-outline-success').click();
    
        //Click en la el botón para cambiar la fecha
        cy.get(':nth-child(6) > .form-group > .gj-datepicker > .input-group-append > .btn > .gj-icon').click();

        //Se ajusta la fecha de finalización
        cy.get(':nth-child(5) > [day="30"] > div').click()
        cy.get('[style="display: block;"] > .gj-picker > .modal-footer > :nth-child(2)').click()

        //Se da click en Update para guardar los cambios
        cy.get('.float-right > .btn').click();

        //Mensaje de confirmación 
        cy.get("#notify_message")
            .should("be.visible")
            .should('contain', 'Successfully saved');
    });

    it('Pruebas cambio fecha terminación de un cupón incorrecta', () => {
        cy.visit("http://localhost:1111/admin/users");
    
        // Ingreso de las credenciales
        cy.get('#email').type('alejandro.marroquin@correounivalle.edu.co');
        cy.get('#password').type('qazw1234');
    
        // Hacer clic en el botón de login
        cy.get("#loginForm").click();
    
        // Verificar que se haya iniciado sesión correctamente
        cy.url().should('include', "http://localhost:1111/admin/dashboard");
    
        // Hacer clic en el botón Discount codes
        cy.get('.mb-2 > :nth-child(4) > .nav-link').click();
    
        // Hacer clic en el botón Edit
        cy.get('.text-right > .btn-outline-success').click();
    
        //Click en la el botón para cambiar la fecha
        cy.get(':nth-child(6) > .form-group > .gj-datepicker > .input-group-append > .btn > .gj-icon').click();

        //Se ajusta la fecha de finalización
        cy.get('[day="10"] > div').click()
        cy.get('[style="display: block;"] > .gj-picker > .modal-footer > :nth-child(2)').click()

        //Se da click en Update para guardar los cambios
        cy.get('.float-right > .btn').click();

        //Mensaje de confirmación 
        cy.get("#notify_message")
            .should("be.visible")
            .should('contain', 'Discount end date needs to be after start date');
    });

});
    
    
