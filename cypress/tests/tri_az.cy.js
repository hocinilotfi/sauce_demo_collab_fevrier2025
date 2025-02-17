/// <reference types="cypress" />

import loginPage from "../pages/login.page"

describe("Test Tri", () => {
    beforeEach(() => {
        it("Se connecter sur le site", () => {
            cy.visit("https://www.saucedemo.com/");
            loginPage.saisirUsername("standard_user");
            loginPage.saisirPassword("secret_sauce");
            loginPage.loginPage();
        }),
        it("Se Connecter avec sur le site", () => {})
    });
})