/// <reference types="cypress" />
import CheckoutOverviewPage from "../pages/CheckoutOvervieuw.page";
import loginPage from "../pages/login.page";
import ProductsPage from "../pages/product.page";
import CartPage from "../pages/cart.page";
import CheckoutInformationPage from "../pages/checkoutinformationpage.page";
describe("Test dela page de paiement", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
        // Étape 1 : Connexion
        loginPage.login("standard_user", "secret_sauce");
        // Étape 2 : Ajouter un produit au panier
        ProductsPage.ajouterProduitAuPanier("sauce-labs-backpack");
        // Étape 3 : Accéder au panier
        ProductsPage.allerAuPanier();
        // Étape 4 : Accéder à la page de paiement
        CartPage.clickCheckoutButton();
        // Étape 5 : Remplir les informations de paiement
        CheckoutInformationPage.completeCheckoutInformation("John", "Doe", "12345");
        // Vérifier que la redirection vers la page produit est correcte
        cy.url().should("include", "/checkout-step-two.html"); 
    });

    it("Vérifier que le prix total est visible", () => {
        CheckoutOverviewPage.verifierleprix();
    });

    it("Finaliser l'achat", () => {
        CheckoutOverviewPage.cliquersurleButtonfinish();
    });

    it("Annuler l'achat", () => {
        CheckoutOverviewPage.cliquersurleButtoncancel();
    });
});
