class CheckoutInformationPage {

    get firstNameInput() {
      return cy.get('[data-test="firstName"]')
    }

    get lastNameInput(){
        return cy.get("[data-test='lastName']")
    }

    get postalCodeInput() {
        return cy.get('[data-test="postalCode"]')
    }

    get continueButton() {
        return cy.get('[data-test="continue"]')
    }


    enterFirstName(firstName) {
        this.firstNameInput.clear().type(firstName)
    }

    enterLastName(lastName) {
        this.lastNameInput.clear().type(lastName)
    }

    enterPostalCode(postalCode) {
        this.postalCodeInput.clear().type(postalCode)
    }

    clickContinue() {
        this.continueButton.click()
    }

    completeCheckoutInformation({ firstName, lastName, postalCode }) {
        this.enterFirstName(firstName)
        this.enterLastName(lastName)
        this.enterPostalCode(postalCode)
        this.clickContinue()
      }

}

export default new CheckoutInformationPage()