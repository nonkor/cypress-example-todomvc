Feature: To Do

  Scenario: clears all completed items
    Given user is navigated to the website
    When user adds multiply items to LocalStorage
    And user clicks clear Completed
    Then to do list contains only active items
