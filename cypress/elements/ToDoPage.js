import BasePage from './BasePage'

export default class ToDoPage extends BasePage {
  headerLogoLocator = 'h1';
  newToDoItemLocator = '.new-todo';
  toDoItemListLocator = '.todo-list li';
  checkBoxLocator = '.toggle[type="checkbox"]'
  activeListLocator = 'a[href="#/active"'
  completeListLocator = 'a[href="#/completed"'

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
    this.getNewTodoItem().type(toDoItem).type('{enter}')
    return this
  }

  checkItemInTheList() {
     cy.get(this.checkBoxLocator).check()
    return this
  }

  updateToDoItem(updatedItem) {
    this.getToDoItemsList()
      .dblclick()
      .find('.edit')
      .clear()
      .type(updatedItem)
      .type('{enter}')

    return this
  }

  clickActiveList() {
    cy.get(this.activeListLocator).click()

    return this
  }

  clickCompletedList() {
    cy.get(this.completeListLocator).click()

    return this
  }

}
