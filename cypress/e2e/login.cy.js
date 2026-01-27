describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/')
  })

  it('Login válido deve permitir entrada no sistema', () => {
    
    cy.fixture('credencias').then(credencias => {
    cy.get('#username').type(credencias.valida.usuario)
    cy.get('#senha').type(credencias.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login inválido deve mostrar mensagem de erro', () => {

    cy.fixture('credencias').then(credencias => {
    cy.get('#username').type(credencias.invalida.usuario)
    cy.get('#senha').type(credencias.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})