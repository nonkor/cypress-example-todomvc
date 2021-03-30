import ToDoPage from './../elements/ToDoPage'
import { NEW_ITEMS } from './../helpers/toDoArray'


describe('To Do spec App', () => {
  let todoPage = new ToDoPage()
  const EDITED_ITEM = 'Updated todo'
  const data = [
    { id: '1', title: 'Active item', completed: false },
    { id: '2', title: 'Completed item', completed: true },
  ]

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
    .addToDoItem(NEW_ITEMS[0])
    .addToDoItem(NEW_ITEMS[1])
    .getToDoItemsList()
    .should('have.length', 2).then(() => {
      todoPage.checkTodosInLocalStorage(2)
    })
  })

  it('completes an item', () => {
    todoPage
    .addTodoItemInLocalStorage()
    .checkItemInTheList()
    .getToDoItemsList()
    .should('have.class', 'completed')
  })

  it('edits an existing todo', () => {
    todoPage
    .addTodoItemInLocalStorage()
    .updateToDoItem(EDITED_ITEM)
    .getToDoItemsList()
    .should('contain', EDITED_ITEM)
  })

  it('filters by active items', () => {
    todoPage
    .addMultipleTodoItemsInLocalStorage(data)
    .clickActiveList()
    .getToDoItemsList()
    .should('have.length', 1)
    .should('contain', 'Active item')
  })

  it('filters by completed items', () => {
    todoPage
    .addMultipleTodoItemsInLocalStorage(data)
    .clickCompletedList()
    .getToDoItemsList()
    .should('have.length', 1)
    .should('contain', 'Completed item')
  })
})

