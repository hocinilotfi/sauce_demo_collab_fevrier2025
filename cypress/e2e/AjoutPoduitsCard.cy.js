/// <reference types="cypress" />

import cartPage from "../pages/cart.page";
import productPage from "../pages/product.page";


Describe("Test affichage des produits ajoutés dans cart", ()=>{
    
    Context("Test affichage des produits ajoutés dans cart", () => {
        beforeEach(() =>{
            cy.visit("https://www.saucedemo.com/");
            loginPage.login("standard_user", "secret_sauce");
        });

        it("Ajouter des produits et vérifier s'ils sont ajoutés dans card", () => {
            // ajouter n produits
            n = 2
            productPage.elements.productTitle().then((products) => {
                products.forEach((produit, id) => {
                    if(id < n){
                        productPage.addProduits(produit);
                    }
                });
            })
            
            productPage.allerAuPanier();

        });
    });
})