/// <reference types="cypress" />

class ChekoutCompletePage{
    elements = {

        image : ()=> cy.get(".pony_express"),
        backButton: ()=> cy.get('#back-to-products')
        
    }


    dispImage(){
        return cy.elements.image();
    }

    clickBack(){

        cy.elements.backButton().click();

    }
}

export default new ChekoutCompletePage;