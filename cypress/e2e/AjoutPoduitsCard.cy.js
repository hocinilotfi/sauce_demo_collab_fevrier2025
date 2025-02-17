/// <reference types="cypress" />

import loginPage from "../pages/login.page";
import productsPage from "../pages/products.page";

Describe("Test affichage des produits ajoutés dans cart", ()=>{
    
    Context("Test affichage des produits ajoutés dans cart", () => {
        beforeEach(() =>{
            loginPage.login("standard_user", "secret_sauce");
        });

        let addedProdcuts = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

        it("Ajouter des produits et vérifier s'ils sont ajoutés dans card", () => {
            // ajouter plusieurs produits
            addedProdcuts.forEach((produit) => {
                productsPage.addProduits(produit);
            });
            
            productsPage.allerAuPanier();

            


        });
    });
})