export class LocalStorageHelper{
    newItems
  constructor() {
    this.newItems = ['My first todo','My second todo']
  }  

 getTodos() {
    let storage = localStorage.getItem('react-todos')

    return JSON.parse(storage)
  }

checkTodos(count) {
    let obj = getTodos()

    expect(obj.length).to.eq(count)
    for (let i = 0; i < count; i++) {
      expect(obj[i].title).to.eq(this.newItems[i])
    }
  }

addTodoItem(id = '1', title = this.newItems[0], completed = false)  {
    let data = [{ id, title, completed }]

    localStorage.setItem('react-todos', JSON.stringify(data))
  }

addMultipleTodoItems(data) {
    localStorage.setItem('react-todos', JSON.stringify(data))
  }

}