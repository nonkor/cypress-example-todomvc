Feature: ToDo feature

  Scenario: completes an item
    Given user is navigated to the website
    When adds toDo item with LocalStorage
    And  user clicks complete checkbox
    Then item is completed
