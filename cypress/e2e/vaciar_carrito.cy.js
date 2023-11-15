describe('Vaciar carrito', () => {
  it('vaciar carrito desde el icono de basura', () => {
    cy.visit('http://localhost:1111');
    
    cy.get('a.btn.btn-primary.add-to-cart').click({ multiple: true });
    cy.get('a[href="/checkout/cart"]').click();
    cy.get('a.btn.btn-primary.float-right').click();
    cy.get('input#shipEmail.form-control.customerDetails').type('correo@ejemplo.com');
    cy.get('input#shipCompany.form-control.customerDetails').type('CLIENTE');
    cy.get('input#shipFirstname.form-control.customerDetails').type('CLIENTE');
    cy.get('input#shipLastname.form-control.customerDetails').type('CLIENTE');
    cy.get('input#shipAddr1.form-control.customerDetails').type('Calle Falsa 123');
    cy.get('select#shipCountry').select('Colombia');
    cy.get('input#shipState.form-control.customerDetails').type('Valle del Cauca');
    cy.get('input#newCustomerPassword.form-control.customerDetails').type('1111');
    cy.get('a[href="/checkout/cart"].btn.btn-primary.float-left').click();

cy.get(':nth-child(1) > #cart > .card > .card-body > .cartBodyWrapper > :nth-child(1) > .p-2 > .h-200 > .col-md-9 > .row > .col-4 > .btn')
  .first() 
  .wait(500)
  .should('be.visible') 
  .click();












   
  });
});