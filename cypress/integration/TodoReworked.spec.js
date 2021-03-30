import ToDoPage from './../elements/ToDoPage'
import { NEW_ITEMS } from './../helpers/toDoArray'


describe('To Do spec App', () => {
  let todoPage = new ToDoPage()

  beforeEach(() => {
    cy.visit('/')
  })

  it('shows a form for adding todo items', () => {
    todoPage
    .getheaderLogo()
    .should('contain', 'todos')

    todoPage
    .getNewTodoItem()
    .should('have.attr', 'placeholder', 'What needs to be done?')

    todoPage
    .getToDoItemsList()
    .should('have.length', 0)
  })

  it('adds new items', () => {
    todoPage
    .getNewTodoItem()

    todoPage
    .addToDoItem(NEW_ITEMS[0])
    .addToDoItem(NEW_ITEMS[1])
    .getToDoItemsList()
    .should('have.length', 2).then(() => {
      todoPage.checkTodosInLocalStorage(2)
    })
  })
})

