Feature: Create and delete Services

  Scenario: Create a Gateway Service
    Given I open the Kong Manager page
    When I navigate to the default workspace
    And I go to the Gateway Services page
    And I create a new gateway service with invalid Upstream URL
    Then I should see an error message
    When I correct the Upstream URL and save the service
    Then I should see the new gateway service listed


  Scenario: Create a route
    Given I open the Kong Manager page
    When I navigate to the default workspace
    When I am on the Routers page
    When I click the new route button
    And I fill out the route form with invalid data
    Then I should see an error message for invalid HTTP path
    When I correct the HTTP path and save the route
    And I should see the new route in the routes list


  Scenario: Delete a route
    Given I open the Kong Manager page
    When I navigate to the default workspace
    When I am on the Routers page
    And I delete the newly created route
    Then the route should no longer be visible


  Scenario: Delete a gateway
    Given I open the Kong Manager page
    When I navigate to the default workspace
    And I go to the Gateway Services page
    And I delete the gateway service
    Then the gateway service should be removed