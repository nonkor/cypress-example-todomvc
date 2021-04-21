Feature: To Do

  Scenario: filters by active items
    Given user is navigated to the website
    When user adds multiply items to LocalStorage
    And users filters by Active items
    Then users observes only active items
