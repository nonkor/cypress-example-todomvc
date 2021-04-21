import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoPage } from '../../../page-objects/todo.page';
import { localStorageHelper } from '../../../helpers/local-storage.helper'

Given('user is navigated to the website', () => {
  todoPage.navigate()
})

When('user adds multiply items to LocalStorage', () => {
  localStorageHelper.addMultipleTodoItemsInLocalStorage(
    [
      { id: '1', title: 'Active item', completed: false },
      { id: '2', title: 'Completed item', completed: true },
    ],
  )
})

And('users filters by completed items', () => {
  todoPage.filterBy('Completed')
})

Then('users observes only completed items', () => {
  todoPage.todoItems()
    .should('have.length', 1)
    .should('contain', 'Completed item')
})
