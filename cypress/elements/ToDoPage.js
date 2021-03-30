import BasePage from './BasePage'

export default class ToDoPage extends BasePage {
  headerLogoLocator = 'h1';
  newToDoItemLocator = '.new-todo';
  toDoItemListLocator = '.todo-list li';

  getheaderLogo(){
    return cy.get(this.headerLogoLocator);

  }

  getNewTodoItem() {
    return cy.get(this.newToDoItemLocator);
  }

  getToDoItemsList() {
    return cy.get(this.toDoItemListLocator).as('todo');
  }

  addToDoItem(toDoItem) {
    cy.type(toDoItem).type('{enter}')
    return this
  }

}
