describe('Filtro correo', () => {
    it('Inicia sesión y filtra un usuario por el email, name or phone number', () => {
      cy.visit('http://localhost:1111/admin/login');
      cy.get('input[type="email"]').type('rivas.lina@correounivalle.edu.co');
      cy.get('input[type="password"]').type('1111');
      cy.get('#loginForm').click();
      cy.get(':nth-child(9) > .nav-link').click();
      cy.get('#review_filter').type('Horrible!!!');
      cy.get('#btn_review_filter').click();
      cy.get('.list-group-item').should('have.length', 1);
      


    });

    it('should reset filter when "Reset" button is clicked', () => {
        cy.visit('http://localhost:1111/admin/login');
      cy.get('input[type="email"]').type('rivas.lina@correounivalle.edu.co');
      cy.get('input[type="password"]').type('1111');
      cy.get('#loginForm').click();
      cy.get(':nth-child(9) > .nav-link').click();
        
        
        // Type a keyword in the review filter input
        cy.get('#review_filter').type('horrible');
    
        // Click the filter button
        cy.get('#btn_review_filter').click();
    
        // Assert that only the relevant review is displayed
        cy.get('.list-group-item').should('have.length', 1);
        cy.contains('.list-group-item', 'Horrible!!!');
    
      
      });
    
      it('should delete a review', () => {
        cy.visit('http://localhost:1111/admin/login');
      cy.get('input[type="email"]').type('rivas.lina@correounivalle.edu.co');
      cy.get('input[type="password"]').type('1111');
      cy.get('#loginForm').click();
      cy.get(':nth-child(9) > .nav-link').click();
        // Click the delete button of the first review
        cy.get('.btn-delete-review').first().click();
    
        // Assert that the review is removed
        cy.get('#notify_message').should('contain', 'Successfully deleted review');
      });
  });