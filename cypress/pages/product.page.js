class ProductsPage {
    elements = {
      productTitle: () => cy.get(".inventory_item_name"),
      productPrice: () => cy.get(".inventory_item_price"),
      addToCartButton: () => cy.get(".btn_inventory"),
      cartNumbre: () => cy.get(".shopping_cart_badge"),
      cartIcon: () => cy.get(".shopping_cart_link"),
      sortDropdown: () => cy.get(".product_sort_container"),
      ajouterAuPanierBouton: (nomProduit) => cy.get(`[data-test="add-to-cart-${nomProduit}"]`),//sélecteur dynam pour trouver le bouton d’un produit spécif
      retirerDuPanierBouton: (nomProduit) => cy.get(`[data-test="remove-${nomProduit}"]`),
    };

  cliquerSurProduit(nomProduit) {
    this.elements.productTitle().contains(nomProduit).click();
    

  }

   ajouterProduitAuPanier(nomProduit) {
    this.elements.ajouterAuPanierBouton(nomProduit).click();
  }
 
  retirerProduitDuPanier(nomProduit) {
    this.elements.retirerDuPanierBouton(nomProduit).click();
  }

  verifierProduitAjoute() {
    this.elements.cartNumber().should("be.visible");
  }

  allerAuPanier() {
    this.elements.cartIcon().click();
  }

  selectionnerTriPar(valeur) {
    this.elements.sortDropdown().select(valeur);
  }
 
  verifierTriSelectionne(valeur) {
    this.elements.sortDropdown().should("have.value", valeur);
  }

  recuperationListTitreProduit(){
    this.elements.productTitle();
  }

  verifierTriProduitsNom(ordre = "az") {
    let nomsProduits = [];
  
    this.elements.productTitle().each(($el) => {
      nomsProduits.push($el.text()); 
    }).then(() => {
      let nomsAttendus = [...nomsProduits].sort(); 
  
      if (ordre === "za") {
        nomsAttendus.reverse(); 
      }
  
      expect(nomsProduits).to.deep.equal(nomsAttendus); 
    });
  }
  verifierTriProduitsPrix(ordre = "asc") {
    let prixProduits = [];

    this.elements.productPrice().each(($el) => {
      prixProduits.push(parseFloat($el.text().replace("$", ""))); 
    }).then(() => {
      let prixAttendus = [...prixProduits].sort((a, b) => a - b); 

      if (ordre === "desc") {
        prixAttendus.reverse();
      }

      expect(prixProduits).to.deep.equal(prixAttendus);
    });
  }
}

export default new ProductsPage();

