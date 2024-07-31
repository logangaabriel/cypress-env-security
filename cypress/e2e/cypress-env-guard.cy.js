describe('Secure handling of cypress.env.json', () => {
  it('Managing sensitive data in cypress.env.json', () => {
    cy.visit('login')  
    cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'))
    const senha = Cypress.env('USER_PASSWORD')
    cy.get('input[type="password"]').type(senha, {log: false})
    cy.get('button[type="submit"]').click()

    cy.contains('.alert', 'Bem vindo, Env!')
      .should('be.visible')
  })
})
