import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoPage } from '../../../page-objects/todo.page';

When('user adds toDo items', () => {
  let items = [
    'My first todo',
    'My second todo',
  ]
  todoPage.addItems(items);
  cy.wrap(items).as('items')

})

Then('items are added', () => {
  cy.get('@items').then((items) => {
    todoPage.verifyItems(items);
  })
})
