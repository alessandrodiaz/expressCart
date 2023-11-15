describe('Ver Trasaciones', () => {
    it('Ver trasaciones del lado del administrador', () => {
      // Visitar la página de inicio de sesión
      cy.visit('http://localhost:1111');
      
      cy.get('a.btn.btn-primary.add-to-cart').click({ multiple: true });
      cy.get('a[href="/checkout/cart"]').click();
      cy.get('a.btn.btn-primary.float-right').click();
      cy.get('input#shipEmail.form-control.customerDetails').type('pruedb2t22a1992te@ejemplo.com');
      cy.get('input#shipCompany.form-control.customerDetails').type('CLIENTE');
      cy.get('input#shipFirstname.form-control.customerDetails').type('CLIENTE');
      cy.get('input#shipLastname.form-control.customerDetails').type('CLIENTE');
      cy.get('input#shipAddr1.form-control.customerDetails').type('Calle Falsa 123');
      cy.get('select#shipCountry').select('Colombia');
      cy.get('input#shipState.form-control.customerDetails').type('Valle del Cauca');
      cy.get('input#newCustomerPassword.form-control.customerDetails').type('1111');
      cy.get('#shipPostcode').type('569546986');
      cy.get('#shipPhoneNumber').type('6266288436');
      cy.get('#createAccountCheckbox').click();
      cy.get('#checkoutInformation').click();
      cy.get('.col-md-5 > .float-right').click();
      cy.get('#submit').click();
    
     
    });
  });