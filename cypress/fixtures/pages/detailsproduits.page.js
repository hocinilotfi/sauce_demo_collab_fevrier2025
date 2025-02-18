class ProductsDetailsPage{

    elements={
       
        titrePrduit: ()=> cy.get('[data-test="inventory-item-name"]'),
        prixProduit: ()=> cy.get('[data-test="inventory-item-price]'),
        buttonAddToCart: ()=> cy.get('[data-test="add-to-cart"]'),
        buttonRemove: ()=> cy.get('[data-test="remove"]'),
    }

    clickSurAddToCart(){
        this.elements.buttonAddToCart().click();
    }

    getTitreProduit(){
        this.elements.titreproduit().invoke('text');
    }

    getPrixProduit(){
        this.elements.prixproduit().invoke('text');
    }

    clickSurRemove(){
        this.elements.buttonRemove();
    }

}
export default new ProductsDetailsPage();
