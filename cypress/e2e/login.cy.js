describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })
})

describe('Login', () => {
  it('Login com dados Inválidos deve  apresentar mensagem de erro ao tentar no sistema', () => {
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123458')
    cy.contains('button', 'Entrar').click()
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})
