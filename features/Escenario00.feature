Feature: Iniciar sesión

@user1 @web
Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 2
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 5 seconds
  When I enter email
  And I wait for 2 seconds
  And I enter password
  And I wait for 2 seconds
  And I click next
  Then I click on the dashboard

