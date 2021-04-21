Feature: To Do

  Scenario: shows a form for adding todo items
    When user is navigated to the website
    Then header, newTodo placeholder, empty todoList and footer are displayed
