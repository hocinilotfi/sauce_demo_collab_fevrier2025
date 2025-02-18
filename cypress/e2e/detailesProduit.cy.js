/// <reference types="cypress" />
import loginPage from "../pages/login.page"
import productsPage from "../pages/product.page"
describe('detailles product', { tags: '@regression' },  () => {
  context('success', () => {
    it('verifier que le produit cliquer est le meme affiché', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce")
      cy.get('[data-test="inventory-item-name"]').each(($itemname) => {
        const productName = $itemname.text().trim();
        productsPage.cliquerSurProduit(productName)
        cy.url().should("include", "inventory-item");
        cy.get(".inventory_details_name").should("contain",productName);
        cy.go("back")
      })
    })
  })
})