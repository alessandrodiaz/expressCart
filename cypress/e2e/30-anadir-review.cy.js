/* 
HU - 30
Como usuario quiero que desde la página de un producto 
que he comprado tener la opción de ingresar la review 
del producto para poder calificar al producto
*/

describe('Prueba para añadir una revisión de un producto', () => {
    
    it('Prueba añadiendo un revisión', () => {

        //Login como cliente
        cy.visit("http://localhost:1111/customer/login");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandromarroquin.com@gmail.com');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get('#customerloginForm').click();

        cy.wait(1000);

        //Página principal
        cy.get('.navbar-brand').click();

        //Click en el producto a reseñar
        cy.get(':nth-child(1) > .thumbnail > .product-wrapper > a > .vertical-center > .img-fluid').click();

        //Click en el botón Add review
        cy.get('#add-review').click();

        //Rellenando los campos del formulario
        cy.get('#review-title').type("Nice");
        cy.wait(1000);
        cy.get('#review-description').type("Super. Excellent product");
        cy.wait(1000);
        cy.get('#review-rating').type("3");

        //Añade la revisión
        cy.get('#addReview').click();

        //Mensaje mostrado luego de añadir la revisión
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Review successfully submitted");

        cy.wait(1000)


    });

    it('Dejando un campo vacio', () => {

        //Login como cliente
        cy.visit("http://localhost:1111/customer/login");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandromarroquin.com@gmail.com');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get('#customerloginForm').click();

        cy.wait(1000);

        //Página principal
        cy.get('.navbar-brand').click();

        //Click en el producto a reseñar
        cy.get(':nth-child(1) > .thumbnail > .product-wrapper > a > .vertical-center > .img-fluid').click();

        //Click en el botón Add review
        cy.get('#add-review').click();

        //Rellenando los campos del formulario sin titulo
        cy.get('#review-description').type("Super. Excellent product");
        cy.wait(1000);
        cy.get('#review-rating').type("3");

        //Añade la revisión
        cy.get('#addReview').click();

        //Mensaje mostrado luego de no añadir titulo
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Please supply a review title");

        //Rellenando los campos del formulario sin descripcion
        cy.get('#review-title').type("Nice");
        cy.wait(1000);
        cy.get('#review-description').clear();
        cy.wait(1000);

        //Añade la revisión
        cy.get('#addReview').click();

        //Mensaje mostrado luego de añadir la revisión
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Please supply a review description");

        //Rellenando los campos del formulario sin raiting
        cy.get('#review-description').type("Super. Excellent product");
        cy.wait(1000);
        cy.get('#review-rating').clear();

        //Añade la revisión
        cy.get('#addReview').click();

        //Mensaje mostrado luego de añadir la revisión
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Please supply a review rating");

        cy.wait(1000)

        cy.wait(1000)
    });

    it('Intentado volver añadir una revisión a un producto reseñado', () => {

        //Login como cliente
        cy.visit("http://localhost:1111/customer/login");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandromarroquin.com@gmail.com');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get('#customerloginForm').click();

        cy.wait(1000);

        //Página principal
        cy.get('.navbar-brand').click();

        //Click en el producto a reseñar
        cy.get(':nth-child(1) > .thumbnail > .product-wrapper > a > .vertical-center > .img-fluid').click();

        //Click en el botón Add review
        cy.get('#add-review').click();

        //Rellenando los campos del formulario
        cy.get('#review-title').type("Nice");
        cy.wait(1000);
        cy.get('#review-description').type("Super. Excellent product");
        cy.wait(1000);
        cy.get('#review-rating').type("3");

        //Añade la revisión
        cy.get('#addReview').click();

        //Mensaje mostrado luego de añadir la revisión
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "Review already submitted");

        cy.wait(1000)
    });

    it('Probando el botón de cancelar reseña', () => {

        //Login como cliente
        cy.visit("http://localhost:1111/customer/login");

        //Ingreso de las credenciales
        cy.get('#email').type('alejandromarroquin.com@gmail.com');
        cy.get('#password').type('qazw1234');

        //Se hace click en el botón de login
        cy.get('#customerloginForm').click();

        cy.wait(1000);

        //Página principal
        cy.get('.navbar-brand').click();

        //Click en el producto a reseñar
        cy.get(':nth-child(1) > .thumbnail > .product-wrapper > a > .vertical-center > .img-fluid').click();

        //Click en el botón Add review
        cy.get('#add-review').click();

        //Rellenando los campos del formulario
        cy.get('#review-title').type("Nice");
        cy.wait(1000);
        cy.get('#review-description').type("Super. Excellent product");
        cy.wait(1000);
        cy.get('#review-rating').type("3");

        //Cancelar la revisión
        cy.get('.btn-outline-danger').click();

        cy.wait(1000)
    });

    it('Intentando poner una reseña sin login', () => {

        //Página principal
        cy.visit("http://localhost:1111/");

        //Click en el producto a reseñar
        cy.get(':nth-child(1) > .thumbnail > .product-wrapper > a > .vertical-center > .img-fluid').click();

        //Click en el botón Add review
        cy.get('#add-review').click();

        //Mensaje que debería salir
        cy.get("#notify_message")
            .should("be.visible") // Esperar a que el mensaje se muestre
            .should("contain", "You need to be logged in to create a review");

        cy.wait(1000)
    });

});