class cartPage {
    elements = {
        checkoutButton: () => cy.get('#checkout'),
        cartButton: () => cy.get('#shopping_cart_container'),
        badgeButton: () => cy.get('[data-test="shopping-cart-badge"]'),
        continueButton: () => cy.get('#continue-shopping'),
        removeButton: () => cy.get('.btn.btn_secondary.btn_small.cart_button')
        
    }
 clickContinueButton(){
   this.elements.continueButton().click();
 }

  clickqueCartbutton(){
       this.elements.Checkoutbuton().click();
  }

  clickCheckoutButton(){
    this.elements.Checkoutbuton().click();
  }

  clickRemoveButton(){
    this.elements.removebuton().click();
  }


  getBadgeElement() {
    return this.elements.badgeButton();
}
    

  
}
export default new cartPage(); 


