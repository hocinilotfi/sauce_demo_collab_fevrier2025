class LoginPage {
    elements = {
        username: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test=error]')
    }

    saisirUsername(username) {
        this.elements.username().clear().type(username)
    }

    saisirPassword(password) {
        this.elements.password().type(password)
    }

    login(username, password) {
        this.saisirPassword(username)
        this.saisirPassword(password)
        this.elements.loginButton().click()
    }

    afficherErreur() {
        return this.elements.errorMessage().should('be.visible')
    }

}

export default new LoginPage();