/// <reference types="cypress" />
import loginPage from "../pages/login.page"
import productsPage from "../pages/product.page"

describe('detailles product', () => {
  context('success', () => {
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce")
      
      cy.get('[data-test="inventory-item-name"]').each(($itemname) => {
        const productName = $itemname.text().trim();
        console.log(productName)
        productsPage.cliquerSurProduit(productName)
        cy.url().should("include", "inventory-item");
        cy.get(".inventory_details_name").should("contain",productName);
        
      })
    })
  })
})