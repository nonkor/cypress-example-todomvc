import { NEW_ITEMS } from './../helpers/toDoArray'

export default class BasePage {

  getItemsFromLocalStorage () {
    let storage = localStorage.getItem('react-todos')

    return JSON.parse(storage)
  }

  checkTodosInLocalStorage (count) {
    let obj = this.getItemsFromLocalStorage()

    expect(obj.length).to.eq(count)
    for (let i = 0; i < count; i++) {
      expect(obj[i].title).to.eq(NEW_ITEMS[i])
    }
  }

  addTodoItemInLocalStorage (id = '1', title = NEW_ITEMS[0], completed = false) {
    let data = [{ id, title, completed }]

    localStorage.setItem('react-todos', JSON.stringify(data))

    return this
  }

  addMultipleTodoItemsInLocalStorage (data) {
    localStorage.setItem('react-todos', JSON.stringify(data))

    return this
  }
}
