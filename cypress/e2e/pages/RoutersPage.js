class RoutersPage {
    clickSidebar(){
      cy.get('.sidebar-menu-toggle').click();
    }
      
    goToRoutes() {
      cy.contains('Routes').click();
    }
  
    clickNewRouteButton() {
      cy.get('[data-testid="new-route"]').click();
    }

    fillRouteDetails(routename, gatewayname,routetags, path) {
      cy.get('[data-testid="route-form-name"]').type(routename);
      cy.get('[data-testid="route-form-service-id"]').click();
      cy.contains(gatewayname).click();
      cy.get('[data-testid="route-form-tags"]').type(routetags);
      cy.get('[data-testid="route-form-paths-input-1"]').type(path);
    }
   
    
  clearInputdata(){
    cy.get('[data-testid="route-form-name"]').clear();
    cy.get('[data-testid="route-form-service-id"]').clear();
    cy.get('[data-testid="route-form-tags"]').clear();
    cy.get('[data-testid="route-form-paths-input-1"]').clear();
  }
    // selectGatewayService(serviceName) {
    //     cy.get('select[name="service"]').select(serviceName);
    // }
    
    // fillOutHttpPath(path) {
    //     cy.get('input[name="httpPath"]').type(path);
    // }
    
    clickSaveButton() {
      cy.get('[data-testid="form-submit"]').click();
    }
    
    verifyErrorMessage() {
        cy.contains('schema violation').should('be.visible');
    }
    
    // verifyRouteSaved() {
    //     cy.contains('Route saved successfully').should('be.visible');
    // }
    clickThreedots(){
    
      cy.get('.actions-container').click();
    }
    deleteRoute(routename) {
      cy.contains('Delete').click();
      cy.get('[data-testid="confirmation-input"]').type(routename);
      cy.contains('Yes, delete').click();
    }

    validateRouteNotExists() {
      cy.contains('deleted').should('exist');
    }
  }
  
  export default new RoutersPage;
  