import ToDoPage from './../elements/ToDoPage'

describe('To Do spec App'), () => {
  const todoPage = new ToDoPage()

  beforeEach(() => {
    cy.visit('/')
  });

  it('shows a form for adding todo items'), () => {
    todoPage
    .getheaderLogo()
    .should('contain', 'todos')

    todoPage
    .getNewTodoItem()
    .should('have.attr', 'placeholder', 'What needs to be done?')

    todoPage
    .getToDoitemsList()
    .should('have.length', 0)
  }
}
