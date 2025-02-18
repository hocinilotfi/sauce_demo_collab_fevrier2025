import menuPage from '../pages/menu.page.js';

describe('Tests du menu et de la déconnexion', () => {
    
    beforeEach(() => {
        
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Vérifier qu'on est bien sur la page d'inventaire
        cy.url().should('include', '/inventory.html');
    });

    it('Vérifier que le menu s\'affiche après un clic', () => {
        // Ouvrir le menu
   
        menuPage. sasirSurMenuButton();

        // Vérifier que le menu est visible
        menuPage.elements.menuContainer().should('be.visible');
    });

    it('Vérifier que l\'utilisateur peut se déconnecter', () => {
        menuPage. sasirSurMenuButton();

        // Cliquer sur "Logout"
        menuPage. saisirLogOut();

        // Vérifier qu'on est bien redirigé vers la page de connexion
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});
