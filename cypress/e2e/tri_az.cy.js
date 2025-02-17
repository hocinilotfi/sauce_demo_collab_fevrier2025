/// <reference types="cypress" />

import loginPage from "../pages/login.page"
import productPage from "../pages/product.page";

describe("Test Tri", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");

        loginPage.saisirUsername("standard_user");

        // Vérifier que la redirection vers la page produit est correcte
        cy.url().should("include", "/inventory.html");
    });

    it("Tri Alphabétique A-Z", () => {
        let produitNonTrier = [];

        productPage.elements.productTitle()
            .then((elements) =>{
                produitNonTrier = [...elements].map((el) => el.innerText.trim());
            })
            .then(() => {
                //Ont applique le Tri "A-Z"
                productPage.selectionnerTriPar("az");

                //vérifier que le tri est bien appliqué
                productPage.verifierTriSelectionne("az");

                //Ont recupère les noms des produits 
                productPage.elements.productTitle().then((elements)=>{
                    const produitsApresTri = [...elements].map((el) => el.innerText.trim());

                    // Vérifier que les produits sont bien triés dans l'ordre alphabétique
                    const produitsManuelTrie = [...produitsAvantTri].sort();

                    expect(produitsApresTri).to.deep.equal(produitsManuelTrie);
                })
            })

    })
})