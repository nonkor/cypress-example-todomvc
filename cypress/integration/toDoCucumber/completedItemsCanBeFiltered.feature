Feature: To Do

  Scenario: filters by completed items
    Given user is navigated to the website
    When user adds multiply items to LocalStorage
    And users filters by completed items
    Then users observes only completed items
