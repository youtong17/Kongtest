import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import KongManagerPage from '../pages/KongManagerPage';
import GatewayServicesPage from '../pages/GatewayServicesPage';
import RoutersPage from '../pages/RoutersPage';

Given('I open the Kong Manager page', () => {
  KongManagerPage.visit();
});

When('I navigate to the default workspace', () => {
  //KongManagerPage.clickWorkspaces();
  KongManagerPage.selectDefaultWorkspace();
});

When('I go to the Gateway Services page', () => {
  GatewayServicesPage.clickSidebar();
  GatewayServicesPage.goToGatewayServices();
  
});

When('I create a new gateway service with invalid Upstream URL', () => {
  GatewayServicesPage.clickNewGatewayService();
  GatewayServicesPage.fillGatewayServiceDetails('TestService', 'test,service', 'invalid-url');
  GatewayServicesPage.saveGatewayService();
});

Then('I should see an error message', () => {
  cy.contains('nvalid URL').should('be.visible');
});

When('I correct the Upstream URL and save the service', () => {
  GatewayServicesPage.clearInputdata();
  GatewayServicesPage.fillGatewayServiceDetails('TestService', 'test,service', 'http://correct-url.com');
  GatewayServicesPage.saveGatewayService();
});

Then('I should see the new gateway service listed', () => {
  GatewayServicesPage.validateServiceExists('TestService');
});

When('I delete the gateway service', () => {
  GatewayServicesPage.clickThreedots();
  GatewayServicesPage.deleteGatewayService('TestService');
});

Then('the gateway service should be removed', () => {
  GatewayServicesPage.validateServiceNotExists();
});


When('I am on the Routers page', () => {
  
  RoutersPage.clickSidebar();
  RoutersPage.goToRoutes();
});

When('I click the new route button', () => {
  RoutersPage.clickNewRouteButton();
});

When('I fill out the route form with invalid data', () => {
  RoutersPage.fillRouteDetails('TestRoute', 'TestService', 'test,tag','invalid-path' )

  RoutersPage.clickSaveButton();
});

Then('I should see an error message for invalid HTTP path', () => {
  RoutersPage.verifyErrorMessage();
});

When('I correct the HTTP path and save the route', () => {
  RoutersPage.clearInputdata();
  RoutersPage.fillRouteDetails('TestRoute', 'TestService', 'test,tag','/valid-path' )

  RoutersPage.clickSaveButton();
});

Then('I should see the new route in the routes list', () => {
  cy.contains('TestRoute').should('be.visible');
});

When('I delete the newly created route', () => {
  RoutersPage.clickThreedots()
  RoutersPage.deleteRoute('TestRoute');
  
});

Then('the route should no longer be visible', () => {
  RoutersPage.validateRouteNotExists();
});
