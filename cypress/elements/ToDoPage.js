import BasePage from './BasePage'

export default class ToDoPage extends BasePage {
  headerLogoLocator = 'h1'
  newToDoItemLocator = '.new-todo'
  toDoItemListLocator = '.todo-list li'
  checkBoxLocator = '.toggle[type="checkbox"]'
  activeListLocator = 'a[href="#/active"'
  completeListLocator = 'a[href="#/completed"'
  clearCompletedButton = '.clear-completed'
  toDoCountLocator = '.todo-count'
  destroyItemLocator = '.destroy'

  getheaderLogo () {
    return cy.get(this.headerLogoLocator)

  }

  getNewTodoItem () {
    return cy.get(this.newToDoItemLocator)
  }

  getToDoItemsList () {
    return cy.get(this.toDoItemListLocator).as('todo')
  }

  getToDoCount () {
    return cy.get(this.toDoCountLocator)
  }

  addToDoItem (toDoItem) {
    this.getNewTodoItem().type(toDoItem).type('{enter}')
    return this
  }

  checkItemInTheList () {
    cy.get(this.checkBoxLocator).check()
    return this
  }

  updateToDoItem (updatedItem) {
    this.getToDoItemsList()
      .dblclick()
      .find('.edit')
      .clear()
      .type(updatedItem)
      .type('{enter}')

    return this
  }

  clickActiveList () {
    cy.get(this.activeListLocator).click()

    return this
  }

  clickCompletedList () {
    cy.get(this.completeListLocator).click()

    return this
  }

  clickClearCompletedBtn () {
    cy.get(this.clearCompletedButton).click()

    return this
  }

  deleteToDoItem () {
    this.getToDoItemsList()
      .trigger('mouseover')
      .get(this.destroyItemLocator)
      .invoke('show')
      .should('be.visible')
      .click()

    return this
  }

}
