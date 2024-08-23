class GatewayServicesPage {
 
  clickSidebar(){
    cy.get('.sidebar-menu-toggle').click();
  }
  
  goToGatewayServices() {
    cy.contains('Gateway Services').click();
  }

  clickNewGatewayService() {
    
    cy.get('[data-testid="new-gateway-service"]').click();
  }


  fillGatewayServiceDetails(gatewayname, gatewaytags, upstreamUrl) {
    cy.get('input[name="name"]').type(gatewayname);
    cy.get('input[name="tags"]').type(gatewaytags);
    cy.get('input[name="url"]').type(upstreamUrl);
  }

  clearInputdata(){
    cy.get('input[name="name"]').clear();
    cy.get('input[name="tags"]').clear();
    cy.get('input[name="url"]').clear();
  }

  saveGatewayService() {
    cy.get('button[type="submit"]').click();
  }

  clickThreedots(){
    
    cy.get('.actions-container').click();
  }
  deleteGatewayService(gatewayname) {
    cy.contains('Delete').click();
    cy.get('[data-testid="confirmation-input"]').type(gatewayname);
    cy.contains('Yes, delete').click();
  }

  validateServiceExists(gatewayname) {
    cy.contains(gatewayname).should('exist');
  }

  validateServiceNotExists() {
    cy.contains('deleted').should('exist');
  }
}

export default new GatewayServicesPage();
