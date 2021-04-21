import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoPage } from '../../../page-objects/todo.page';
import { localStorageHelper } from '../../../helpers/local-storage.helper'

Given('user is navigated to the website', () => {
  todoPage.navigate()
})

When('adds toDo item with LocalStorage', () => {
  localStorageHelper.addTodoItemInLocalStorage()

  todoPage.todoCount()
    .should('have.text', '1 item left')
})

And('user deletes to do item', () => {
  todoPage.removeItem()
})

Then('to do item is deleted', () => {
  todoPage.todoItems().should('have.length', 0)

  todoPage.todoCount()
    .should('not.exist')
})
