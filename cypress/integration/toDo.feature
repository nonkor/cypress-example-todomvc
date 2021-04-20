Feature: I want to check to do app
    General steps to check To do apps

    Scenario: shows a form for adding todo items
    Given user is navigated to the ToDo page
    Then proper header block is displayed
    And ToDo items list is empty
    And footer contains Double-click to edit a todo