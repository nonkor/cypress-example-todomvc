import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoPage } from '../../../page-objects/todo.page';
import { localStorageHelper } from '../../../helpers/local-storage.helper'

When('user is navigated to the website', () => {
  todoPage.navigate()
})

When('adds toDo item with LocalStorage', () => {
  localStorageHelper.addTodoItemInLocalStorage();
  })

Then('user clicks complete checkbox', () => {
  cy.get('.toggle[type="checkbox"]').check()
})

Then('item is completed', () => {
  todoPage.todoItems().should('have.class', 'completed')
})
