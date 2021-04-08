export class TodoPage {
header() { return cy.get('h1') }
newTodo () { return cy.get('.new-todo') }
todoItem (itemNumber) { return cy.get('.todo-list li').eq(itemNumber) }
todoItems () { return cy.get('.todo-list li') }
allCheckboxes () {return cy.get('.toggle[type="checkbox"]')}
buttonActive () {return cy.contains('a', 'Active')}
buttonCompleted () {return cy.contains('a', 'Completed')}
buttonClearCompleted () {return cy.get('.clear-completed')}

completeAllTodos(){ this.allCheckboxes().check() }

addTodos (items) {
for (let item of items)
{
    this.newTodo().type(item).type('{enter}')
}

}

editItems (itemNumber, newValue)
{
    this.
    todoItems()
    .eq(itemNumber)
    .dblclick()
    .find('.edit')
    .clear()
    .type(newValue)
    .type('{enter}')
}

addTodoItemsToLocalStorage(active, completed)
{
    let data = [ ]
    for (let activeelement = 0; activeelement<active; activeelement++)
    data.push({ id: activeelement, title: 'Active item '+activeelement, completed: false },)

    for (let Completedelement = active; Completedelement<active+completed; Completedelement++)
    data.push({ id: Completedelement, title: 'Completed item '+Completedelement, completed: true },)


    localStorage.setItem('react-todos', JSON.stringify(data))
}

verifyTodos(items)
{
    this.todoItems().should('have.length',  items.length)
    for (let itemNumber = 0; itemNumber < items.length; itemNumber++)
    this.todoItems().eq(itemNumber).should('contain', items[itemNumber])
}

verifyCounter(count)
{
    if (count==null)
    cy.get('.todo-count')
    .should('not.exist')
    
    else if (count==0)
    cy.get('.todo-count')
    .should('have.text', count+' items left')

    else if (count==1)
    cy.get('.todo-count')
    .should('have.text', count+' item left')

    else if (count>1)
    cy.get('.todo-count')
    .should('have.text', count+' items left')

    
    
    
}

clearElement(todoNumber)
{
    this.todoItems().eq(todoNumber)
    .trigger('mouseover').get('.destroy')
    .invoke('show').should('be.visible').eq(todoNumber)
    .click()
}

}



export const todoPage = new TodoPage ()

