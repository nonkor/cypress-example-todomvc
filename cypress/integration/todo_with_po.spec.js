import { todoPage} from '../page-objects/todo.page'
import {LocalStorageHelper} from '../helpers/local-storage.helpes'

describe('TodoMVC - React', () => {
  let localStorageHelper

  beforeEach(function () {
    cy.visit('/')
    localStorageHelper = new LocalStorageHelper()
  })

  it('shows a form for adding todo items', () => {
    todoPage.header().should('contain', 'todos')
    todoPage.newTodo().should('have.attr', 'placeholder', 'What needs to be done?')
    todoPage.todoItems().should('have.length', 0)
  })

  it('adds new items', () => {
    todoPage.addTodos(localStorageHelper.newItems)
    
    todoPage.verifyTodos(localStorageHelper.newItems)
  })

  it('completes an item', () => {
    localStorageHelper.addTodoItem()
    todoPage.markTodos()

    todoPage.todoItems().should('have.class', 'completed')
  })

  it('edits an existing todo', () => {
    const EDITED_ITEM = 'Updated todo'
    localStorageHelper.addTodoItem()
    todoPage.editTodos(EDITED_ITEM)

    todoPage.todoItems().should('contain', EDITED_ITEM)
  })

  it('filters by active items', () => {
      const active_item = { id: '1', title: 'Active item', completed: false }
      const completed_item = { id: '2', title: 'Completed item', completed: true }
      localStorageHelper.addMultipleTodoItems(
        [
          active_item,
          completed_item,
        ],
      )
    todoPage.filterActive()

    todoPage.verifyTodos([active_item.title])
  })

  it('filters by completed items', () => {
    const active_item = { id: '1', title: 'Active item', completed: false }
    const completed_item = { id: '2', title: 'Completed item', completed: true }
    localStorageHelper.addMultipleTodoItems(
      [
        active_item,
        completed_item,
      ],
    )
    todoPage.filterCompleted()
   
    todoPage.verifyTodos([completed_item.title])
  })

  it('clears all completed items', () => {
    const active_item = { id: '1', title: 'Active item', completed: false }
    const completed_item = { id: '2', title: 'Completed item', completed: true }
    localStorageHelper.addMultipleTodoItems(
      [
        active_item,
        completed_item,
      ],
    )
    todoPage.filterClearCompleted()

    todoPage.verifyTodos([active_item.title])

  })

  it('deletes the todo', () => {
    localStorageHelper.addTodoItem()
    todoPage.deleteTodos()

    todoPage.verifyTodos([])
  })
})
