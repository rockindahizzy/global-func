/// <reference types="cypress" />
describe('page', () => {
  it('works', function() {
    this.sayHello()
    cy.visit('https://example.cypress.io')
  })
})
