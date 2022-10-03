/// <reference types="Cypress" />

import Elements from '../elements/Elements'
const elements = new Elements
const url = Cypress.config("baseUrl")

class PageObjects {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Selecionar o Botão ENTER
    selectEnterButton() {
        cy.get(elements.ImputSearchPage()).should('be.visible').type('Bitcoin{enter}')
    }

    // Selecionar Primeiro elemento apos a Busca
    selectFitstElement() {
        cy.get(elements.ImputSearchPage()).should('be.visible').type(elements.TextBitcoin)
        cy.get(elements.firstElementList()).first().should('be.visible').click()
    }

    // Selecionar Botão Magnifying Glass
    foundbymagnifyinglass() {
    cy.get(elements.ImputSearchPage()).should('be.visible').type(elements.TextBitcoin)
    cy.get(elements.buttonMagnifyingGlass()).should('be.visible').click()
    }

    // Validar Resultado Esperado nome Bitcoin Visivel na Tela
    viewresultexpected() {
        cy.get(elements.TextBitcoin()).should('be.visible')
    }
}
