class cartPage {
    elements = {
        Checkoutbuton: () => cy.get('#checkout'),
        cartbuton: () => cy.get('#shopping_cart_container'),
        badgeButton: () => cy.get('[data-test="shopping-cart-badge"]'),
        Checkoutbuton: () => cy.get('# Checkoutbuton'),
        removebuton: () => cy.get('#remove-sauce-labs-backpack"')
        
    }

    cliquerchechoutbuton() {
        this.elements.Checkoutbuton().click();
    }

  cliquecartbuton(){
       this.elements.Checkoutbuton().click();
  }

  clickCheckoutbuton(){
    this.elements.Checkoutbuton().click();
  }

  clickremovebuton(){
    this.elements.removebuton().click();
  }
  

  getBadgeElement() {
    return this.elements.badgeButton();
}
    

  
}
export default new cartPage(); 


