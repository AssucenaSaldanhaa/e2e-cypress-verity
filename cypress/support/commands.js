// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('validar_formulario', () => { 
    cy.contains('Vamos conversar')
        .scrollIntoView()
        .should("be.visible")
    cy.get("input[name=nome]")
        .should("be.visible")
    cy.get("input[name=email]")
        .should("be.visible")
    cy.get("input[name=phone]")
        .should("be.visible")
    cy.get("textarea[placeholder='Nos conte o seu desafio']")
        .should("be.visible")
    cy.get("[id='comp-kwz6tqgp']")
        .should("be.visible")
    cy.get("button")    
        .contains("Enviar")
        .should("be.visible")
})

Cypress.Commands.add('preencher_campo_nome', (valor) => { 
    cy.get("input[name=nome]")
        .should("be.visible")
        .type(valor)

})

Cypress.Commands.add('preencher_campo_email', (valor) => { 
    cy.get("input[name=email]")
        .should("be.visible")
        .type(valor)

})

Cypress.Commands.add('preencher_campo_telefone', (valor) => { 
    cy.get("input[name=phone]")
        .should("be.visible")
        .type(valor)

})

Cypress.Commands.add('preencher_campo_descricao', (valor) => { 
    cy.get("textarea[placeholder='Nos conte o seu desafio']")
        .should("be.visible")
        .type(valor)

})

Cypress.Commands.add('clicar_checkbox', () => { 
    cy.get("[id='comp-kwz6tqgp']")
        .should("be.visible")
        .click()

})

Cypress.Commands.add('clicar_botao_enviar', () => { 
    cy.get("button")
        .contains("Enviar")
        .should("be.visible")
        .click()

})

Cypress.Commands.add('validar_mensagem_de_sucesso', () => {
    cy.contains("Obrigado!")
       .should('be.visible')
})

Cypress.Commands.add('validar_mensagem_de_error', (field, message)=> {
    cy.contains('Enviar').click()
    field
    cy.get(`input[name=${field}]:invalid`).then(($input)=> {
        expect(message).to.be.equal($input[0].validationMessage)
    })
})