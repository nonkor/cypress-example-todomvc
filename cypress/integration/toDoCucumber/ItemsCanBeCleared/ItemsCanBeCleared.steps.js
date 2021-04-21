import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoPage } from '../../../page-objects/todo.page';
import { localStorageHelper } from '../../../helpers/local-storage.helper'

//Cucumber plugin does not support reusable methods
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

And('user clicks clear Completed', () => {
  todoPage.clearCompleted()
})

Then('to do list contains only active items', () => {
  todoPage.todoItems()
    .should('have.length', 1)
    .should('contain', 'Active item')

  todoPage.todoCount()
    .should('have.text', '1 item left')
})
