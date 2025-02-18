import loginPage from "../pages/login.page"
import productsPage from "../pages/product.page"

describe('detailles product', { tags: '@regression' }, () => {
  context('success', { tags: '@tc-006' }, ()=>{
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce")
      productsPage.cliquerSurProduit("Sauce Labs Backpack")


    })
  })




})