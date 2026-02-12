describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login válido deve permitir entrada no sistema', () => {
    
     cy.loginValidUser()
     cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login inválido deve mostrar mensagem de erro', () => {

    cy.loginInvalidUser()

    cy.verificarMensagemnoToas('Erro no login. Tente novamente.')
  })
})