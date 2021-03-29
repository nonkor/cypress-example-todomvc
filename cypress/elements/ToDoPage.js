export default class ToDoPage {
  headerLogoLocator = 'h1';
  newToDoItemLocator = '.new-todo';
  toDoItemListLocator = '.todo-list li';

  getheaderLogo(){
    return cy.get(this.headerLogoLocator);

  }

  getNewTodoItem() {
    return cy.get(this.newToDoItemLocator);
  }

  getToDoitemsList() {
    return cy.get(this.toDoItemListLocator).as('todo');
  }

  getItemsFromLocalStorage () {
    const getTodosFromLocalStorage = () => {
      let storage = localStorage.getItem('react-todos')

      return JSON.parse(storage)
    }
  }
}
