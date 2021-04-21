import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { todoPage } from '../../../page-objects/todo.page';
import { localStorageHelper } from '../../../helpers/local-storage.helper'

Given('user is navigated to the website', () => {
  todoPage.navigate()
})

When('adds toDo item with LocalStorage', () => {
  localStorageHelper.addTodoItemInLocalStorage();
})

And('user updates item', () => {
  let item = 'Updated todo';
  todoPage.editItem(item);
  cy.wrap(item).as('updatedItem');
})

Then('todo list contains updated item', () => {
cy.get('@updatedItem').then((item) => {
  todoPage.todoItems()
    .should('contain', item)
  })
})
