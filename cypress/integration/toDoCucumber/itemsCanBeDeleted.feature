Feature: To Do

  Scenario: deletes the todo
    Given user is navigated to the website
    When adds toDo item with LocalStorage
    And user deletes to do item
    Then to do item is deleted
