/// <reference types="cypress" />
import CheckoutOverviewPage from "../pages/";
describe("Test de la page de paiement", () => {

    beforeEach(() => {
        cy.visit("/checkout-overview");
    });

});
