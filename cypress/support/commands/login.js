Cypress.Commands.add('loginValidUser', () => {

    cy.fixture('credencias').then(credencias => {
    cy.get('#username').type(credencias.valida.usuario)
    cy.get('#senha').type(credencias.valida.senha)
    })
    cy.contains('button', 'Entrar').click()


})
Cypress.Commands.add('loginInvalidUser',() => {

        cy.fixture('credencias').then(credencias => {
    cy.get('#username').type(credencias.invalida.usuario)
    cy.get('#senha').type(credencias.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()

})