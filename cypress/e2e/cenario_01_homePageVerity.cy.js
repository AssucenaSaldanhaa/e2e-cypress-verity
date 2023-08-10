/// <reference types="cypress" />

describe('cenario 01 testando pagina inicial', () => {

    beforeEach(() => {
        cy.visit('/')
      })
    
    it(' Teste 01 verificar se os títulos: Somos Verity_  Nossos clientes_  estão visíveis na home page', () => {
        cy.get("[id='comp-lhp9lfx81'] [id='bgLayers_comp-lhp9lfx81'] [data-testid='colorUnderlay']")
            .scrollIntoView()
            .should("be.visible")

        cy.get("[data-mesh-id='comp-lhp9lfxa1inlineContent'] h2", {timeout: 1000})
            .contains("Somos Verity_")
            .should("be.visible")
            .then( ($locator) => {
                expect($locator.get(0).innerText).to.be.equal("Somos Verity_")
            })

        cy.get("[id='comp-lhp9lfye1'] [data-mesh-id='comp-lhp9lfyg2inlineContent']")
            .scrollIntoView()
            .should("be.visible")
            
        cy.get("[data-mesh-id='comp-lhp9lfyg2inlineContent'] h2", {timeout: 1000})
            .contains("Nossos clientes_")
            .should("be.visible")
            .then( ($locator) => {
                expect($locator.get(0).innerText).to.be.equal("Nossos clientes_")
            })
            
    });
});