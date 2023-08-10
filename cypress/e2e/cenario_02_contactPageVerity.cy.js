/// <reference types="cypress" />
import contato from "../fixtures/contato.json"

describe('cenario 02 testando pagina de contato', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('CONTATO').click({ force: true })
    })

    it('Teste 01 preencher formulário com sucesso', () => {

        cy.validar_formulario()
        cy.preencher_campo_nome(contato.Teste_01.nome)
        cy.preencher_campo_email(contato.Teste_01.email)
        cy.preencher_campo_telefone(contato.Teste_01.telefone)
        cy.preencher_campo_descricao(contato.Teste_01.descricao)
        cy.clicar_checkbox()
        cy.clicar_botao_enviar()
        cy.validar_mensagem_de_sucesso()

        cy.validar_mensagem_de_error()



    });

    it('Teste 02 Preencher formulário apenas com campos obrigatórios', () => {

        cy.validar_formulario()
        cy.preencher_campo_nome(contato.Teste_02.nome)
        cy.preencher_campo_email(contato.Teste_02.email)
        cy.preencher_campo_telefone(contato.Teste_02.telefone)
        cy.clicar_botao_enviar()
        cy.validar_mensagem_de_sucesso()

        cy.validar_mensagem_de_error()


    });

    it('Teste 03 Tentar enviar formulário com campo email com valor inválido', () => {

        cy.validar_formulario()
        cy.preencher_campo_nome(contato.Teste_03.nome)
        cy.preencher_campo_email(contato.Teste_03.email)
        cy.preencher_campo_telefone(contato.Teste_03.telefone)
        cy.preencher_campo_descricao(contato.Teste_03.descricao)
        cy.clicar_checkbox()
        cy.clicar_botao_enviar()

        cy.validar_mensagem_de_error("email", `Insira uma parte depois de "@". "${contato.Teste_03.email}" está incompleto.`)

    });

    it('Teste 04 Tentar enviar o formulário com campo nome vazio', () => {
        cy.validar_formulario()
        cy.preencher_campo_email(contato.Teste_04.email)
        cy.preencher_campo_telefone(contato.Teste_04.telefone)
        cy.preencher_campo_descricao(contato.Teste_04.descricao)
        cy.clicar_checkbox()
        cy.clicar_botao_enviar()

        cy.validar_mensagem_de_error("nome", "Preencha este campo.")
    });

    it('Teste 05 Tentar enviar o formulário com campo email vazio', () => {
        cy.validar_formulario()
        cy.preencher_campo_nome(contato.Teste_05.nome)
        cy.preencher_campo_telefone(contato.Teste_05.telefone)
        cy.preencher_campo_descricao(contato.Teste_05.descricao)
        cy.clicar_checkbox()
        cy.clicar_botao_enviar()

        cy.validar_mensagem_de_error("email", "Preencha este campo.")
    });

    it('Teste 06 Tentar enviar o formulário com campo telefone vazio', () => {
        cy.validar_formulario()
        cy.preencher_campo_nome(contato.Teste_06.nome)
        cy.preencher_campo_email(contato.Teste_06.email)
        cy.preencher_campo_descricao(contato.Teste_06.descricao)
        cy.clicar_checkbox()
        cy.clicar_botao_enviar()
        
        cy.validar_mensagem_de_error("phone", "Preencha este campo.")
    });

});