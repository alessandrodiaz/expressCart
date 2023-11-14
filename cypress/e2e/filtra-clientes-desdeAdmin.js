/**
 * HISTORIA DE USUARIO #1
 * AGREGAR PRODUCTOS AL CARRITO
 * USANDO COMO MÉTODO DE ENTRADA EL TECLADO
 * PRUEBAS FUNCIONALES
 * */
/*
describe("Pruebas de filtro en la página de Clientela", () => {
    before(() => {
      // Visita la página que contiene el formulario de filtrado
      cy.visit("http://localhost:1111/admin/customers");
    });
  
    it("Debería filtrar por correo electrónico", () => {
      // Ingresar un valor de correo electrónico en el campo de filtro
      cy.get("#customer_filter").type("test@test.com");
  
      // Hacer clic en el botón de filtro
      cy.get("#btn_customer_filter").click();
  
      // Verificar que solo se muestren elementos que coincidan con el correo electrónico filtrado
      cy.get(".list-group-item").should("have.length", 1); // Ajusta el número según lo que esperes
  
      // Verificar que los elementos coincidentes contengan el correo electrónico correcto
      cy.get(".list-group-item")
        .contains("test@test.com")
        .should("exist");
    });
  
    it("Debería filtrar por nombre", () => {
      // Borrar el valor anterior en el campo de filtro
      cy.get("#customer_filter").clear();
  
      // Ingresar un valor de nombre en el campo de filtro
      cy.get("#customer_filter").type("Testy Cles");
  
      // Hacer clic en el botón de filtro
      cy.get("#btn_customer_filter").click();
  
      // Verificar que solo se muestren elementos que coincidan con el nombre filtrado
      cy.get(".list-group-item").should("have.length", 1); // Ajusta el número según lo que esperes
  
      // Verificar que el elemento coincidente contenga el nombre correcto
      cy.get(".list-group-item")
        .contains("Cles irritables")
        .should("exist");
    });
  
    it("Debería filtrar por número de teléfono", () => {
      // Borrar el valor anterior en el campo de filtro
      cy.get("#customer_filter").clear();
  
      // Ingresar un valor de número de teléfono en el campo de filtro
      cy.get("#customer_filter").type("123456789");
  
      // Hacer clic en el botón de filtro
      cy.get("#btn_customer_filter").click();
  
      // Verificar que solo se muestren elementos que coincidan con el número de teléfono filtrado
      cy.get(".list-group-item").should("have.length", 2); // Ajusta el número según lo que esperes
  
      // Verificar que los elementos coincidentes contengan el número de teléfono correcto
      cy.get(".list-group-item")
        .contains("123456789")
        .should("exist");
    });
  });
  */