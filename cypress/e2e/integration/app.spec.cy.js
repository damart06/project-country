describe('Test for application', () => {
  it('Should show country information', () => {
    cy.visit('http://localhost:3000'); 
    
  
    cy.get('input[name="country"]').type('France');
    cy.get('button[type="submit"]').click();
    
    
    cy.contains('France').should('be.visible');
    cy.contains('Population:').should('be.visible');
    cy.contains('Capital:').should('be.visible');
    cy.contains('Flag :').should('be.visible');
    cy.contains('Region:').should('be.visible');
    cy.contains('Area:').should('be.visible');
  });
});
