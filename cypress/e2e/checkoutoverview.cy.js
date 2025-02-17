/// <reference types="cypress" />
import CheckoutOverviewPage from "../pages/";

describe("Test de la page de paiement", () => {

    beforeEach(() => {
        cy.visit("/checkout-overview");
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
