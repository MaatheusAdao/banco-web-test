describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/')
  })

  it('Login válido deve permitir entrada no sistema', () => {
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('123456')
    cy.contains('button', 'Entrar').click()
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login inválido deve mostrar mensagem de erro', () => {
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('123458')
    cy.contains('button', 'Entrar').click()
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})