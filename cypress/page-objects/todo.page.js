export class TodoPage {
    header () { return cy.get('h1')}
    newTodo() { return cy.get('.new-todo')}
    todoItems () { return cy.get('.todo-list li')}
    checkbox() {return cy.get('.toggle[type="checkbox"]')}

    addTodos(items){
        for (let item of items) {
            this.newTodo().type(item).type('{enter}')
        }}

    markTodos(){
        this.checkbox().check()
    }

    editTodos(new_name){
        this.todoItems()
            .dblclick()
            .find('.edit')
            .clear()
            .type(new_name)
            .type('{enter}')
    
    }

    deleteTodos(){
        this.todoItems()
            .trigger('mouseover').get('.destroy')
            .invoke('show').should('be.visible')
            .click()
    }

    verifyTodos(items) {
        for (let item of items) {
            this.todoItems().should('contain', item)
        }
        this.todoItems().should('have.length', items.length)
    } 

    filterActive(){
        cy.contains('a', 'Active').click()
    }

    filterCompleted(){
        cy.contains('a', 'Completed').click()
    }

    filterClearCompleted(){
        cy.contains('button', 'Clear completed').click()
    }
   }

export const todoPage = new TodoPage()