import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoPage } from '../../../page-objects/todo.page';

When('user is navigated to the website', () => {
  todoPage.navigate()
})

Then('header, newTodo placeholder, empty todoList and footer are displayed', () => {
  todoPage.header().should('contain', 'todos')
  todoPage.newTodo().should('have.attr', 'placeholder', 'What needs to be done?')
  todoPage.todoItems().should('have.length', 0)
  todoPage.footer.info().should('contain', 'Double-click to edit a todo')
})
