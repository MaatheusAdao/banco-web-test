describe('Transfericias',() => {

     beforeEach(() => {
    cy.visit('/')
    
    cy.loginValidUser()
    
    cy.contains('h4','Realizar Transferência').should('be.visible')
    
  })

    it('Deve transferir quando informo dados e valor validos', () => {


      cy.realizarTransferencias('Maria Oliveira', 'João da Silva','11' )

      cy.verificarMensagemnoToas('Transferência realizada!')



    })


 it('Deve apresentar erro quando transferir mais de 5 mil sem o token', () => {

       cy.realizarTransferencias('Maria Oliveira', 'João da Silva','6000' )
        
       cy.verificarMensagemnoToas('Autenticação necessária para transferências acima de R$5.000,00.')

    })
    })

    