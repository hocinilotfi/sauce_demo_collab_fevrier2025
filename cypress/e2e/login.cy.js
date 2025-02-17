import loginPage from "../pages/login.page"

describe('login scenario', () => {
  context('success', ()=>{
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce")
    })
  })

  context('correct user and wrong pass', ()=>{
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce1")
      loginPage.afficherErreur()
    })
  })

  context('correct pass and wrong user', ()=>{
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user1", "secret_sauce")
      loginPage.afficherErreur()
    })
  })

  context('wrong pass and wrong user', ()=>{
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user1", "secret_sauce1")
      loginPage.afficherErreur()
    })
  })
})