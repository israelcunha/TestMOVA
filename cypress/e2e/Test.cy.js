describe('DuckDuckGo', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com/?q=&t=h_')
  })

  it('search by typing and press ENTER', () => {
    cy.get('#search_form_input_homepage')
      .should('be.visible')
      .type('Bitcoin{enter}')

    cy.get('.results')
      .should('contain', 'Bitcoin')
  })

  it('search by typing and click the magnifying glass', () => {
    cy.get('#search_form_input_homepage')
      .should('be.visible')
      .type('Bitcoin')
    cy.get('#search_button_homepage')
      .should('be.visible')
      .click()

    cy.get('.results')
      .should('contain', 'Bitcoin')
  })

  it('search by form', () => {
    cy.get('#search_form_input_homepage')
      .should('be.visible')
      .type("Bitcoin")

      cy.get('.acp').first()
      .should('be.visible')
      .click()
      
    cy.get('.results')
      .should('contain', 'Bitcoin')
  })
});