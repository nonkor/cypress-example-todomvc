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

And('users filters by Active items', () => {
  todoPage.filterBy('Active')
})

Then('users observes only active items', () => {
  todoPage.todoItems()
    .should('have.length', 1)
    .should('contain', 'Active item')
})
