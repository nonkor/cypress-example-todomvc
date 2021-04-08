import {TodoPage, todoPage} from '../page-objects/todo.page'

describe('TodoMVC - React', () => {
  // items description
  const NEW_ITEMS = [
    'My first todo',
    'My second todo',
  ]
  const EDITED_ITEM = 'Updated todo'

  // specs
  beforeEach(function () {
    cy.visit('/')
  })

  it('shows a form for adding todo items', () => {
    todoPage.header().should('contain', 'todos')
    todoPage.newTodo().should('have.attr', 'placeholder', 'What needs to be done?')
    todoPage.todoItems().should('have.length', 0)
  })

  it('adds new items', () => {
  todoPage.addTodos(NEW_ITEMS)
  todoPage.verifyTodos(NEW_ITEMS)

    })
  

  it('completes an item', () => {
    todoPage.addTodos('1')
    todoPage.completeAllTodos()
    todoPage.todoItems().should('have.class', 'completed')
  })

  it('edits an existing todo', () => {
    todoPage.addTodoItemsToLocalStorage(1,0)
    todoPage.editItems(0, EDITED_ITEM)
    todoPage.todoItems()
    .should('contain', EDITED_ITEM)
  })

  it('filters by active items', () => {
    todoPage.addTodoItemsToLocalStorage(1,1)
    todoPage.buttonActive().click()
    todoPage.todoItems()
    .should('have.length', 1)
    .should('contain', 'Active item')
  })

  it('filters by completed items', () => {
    todoPage.addTodoItemsToLocalStorage(1,1)
    todoPage.buttonCompleted().click()
    todoPage.todoItems()
    .should('have.length', 1)
    .should('contain', 'Completed item')
  })

  it('clears all completed items', () => {
    todoPage.addTodoItemsToLocalStorage(1,1)
    todoPage.buttonClearCompleted().click()
    todoPage.todoItems()
    .should('have.length', 1)
    .should('contain', 'Active item')
    todoPage.verifyCounter(1)
  })

  it('deletes the todo', () => {
    todoPage.addTodoItemsToLocalStorage(1,0)
    todoPage.verifyCounter(1)
    todoPage.clearElement(0)
    todoPage.addTodoItemsToLocalStorage(1,0)
    todoPage.todoItems().should('have.length', 0)
    todoPage.verifyCounter(null)
  })
  
})

