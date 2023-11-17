describe('Filtro correo', () => {
    it('Modificar nombre', () => {
      cy.visit('http://localhost:1111/admin/login');
      cy.get('input[type="email"]').type('rivas.lina@correounivalle.edu.co');
      cy.get('input[type="password"]').type('1111');
      cy.get('#loginForm').click();
      cy.get(':nth-child(7) > .nav-link').click();
      cy.get('[href="/admin/user/edit/6552d81af635900ac4335dc5"]').click();
      cy.get('#usersName').type(' marcela');

      

      cy.get('#userPassword').type('1111');
      cy.get('#userEditForm > :nth-child(5) > .form-control').type('1111');
     
      cy.get('#btnUserEdit').click();

      cy.get('#notify_message').should('contain', 'User account updated');


    });


    it('Modificar contraseña si no coinciden', () => {
        cy.visit('http://localhost:1111/admin/login');
        cy.get('input[type="email"]').type('rivas.lina@correounivalle.edu.co');
        cy.get('input[type="password"]').type('1111');
        cy.get('#loginForm').click();
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('[href="/admin/user/edit/6552d81af635900ac4335dc5"]').click();
  
        cy.get('#userPassword').type('1111');
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('1122');
       
        cy.get('#btnGenerateAPIkey').click();
        cy.get('#notify_message').should('contain', 'API Key generated');

        cy.get('#btnUserEdit').click();
       cy.get('#notify_message').should('contain', 'password does not match');
  
  
      });

      it('Modificar nombre, contraseña y API key', () => {
        cy.visit('http://localhost:1111/admin/login');
        cy.get('input[type="email"]').type('rivas.lina@correounivalle.edu.co');
        cy.get('input[type="password"]').type('1111');
        cy.get('#loginForm').click();
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('[href="/admin/user/edit/6552d81af635900ac4335dc5"]').click();

        cy.get('#userPassword').type('1111');
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('1111');
  
        cy.get('#btnGenerateAPIkey').click();
        cy.get('#notify_message').should('contain', 'API Key generated');

        cy.get('#btnUserEdit').click();
        cy.get('#notify_message').should('contain', 'User account updated');
  
  
      });


      it('Modificar Rol', () => {
        cy.visit('http://localhost:1111/admin/login');
        cy.get('input[type="email"]').type('rivas.lina@correounivalle.edu.co');
        cy.get('input[type="password"]').type('1111');
        cy.get('#loginForm').click();
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('[href="/admin/user/edit/6552d81af635900ac4335dc5"]').click();

        cy.get('#userPassword').type('1111');
        cy.get('#userEditForm > :nth-child(5) > .form-control').type('1111');
  
        cy.get('#btnGenerateAPIkey').click();
        cy.get('#notify_message').should('contain', 'API Key generated');

        cy.get('#userAdmin').click();

        cy.get('#btnUserEdit').click();
        cy.get('#notify_message').should('contain', 'User account updated');

        cy.get(':nth-child(7) > .nav-link').click();
        cy.get(':nth-child(1) > .float-right > span')
        .should('have.text', 'user');

  
  
      });

});