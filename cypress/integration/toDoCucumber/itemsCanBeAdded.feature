Feature: To Do

  Scenario: adds new items
    Given user is navigated to the website
    When user adds toDo items
    Then items are added
