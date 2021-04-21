Feature: To Do

  Scenario: edits an existing todo
    Given user is navigated to the website
    When adds toDo item with LocalStorage
    And user updates item
    Then todo list contains updated item
