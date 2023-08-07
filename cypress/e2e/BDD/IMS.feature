Feature: Incident management system 

    end to end test

    Scenario: IMS login verification
    Given I open the application
    When I enter my login credentials
    And verify the data entered are visible 
    Then click on the click on the login button