export default {
  setToDoItem (state, obj) {
    if (obj) {
      state.todoList.push(obj)
    }
  },
  setUpdateToDoItem (state, obj) {
    if (obj) {
      state.todoList.map((item) => {
        if (item.id === obj.id) item = Object.assign(item, obj)
        return item
      })
    }
  },
  setDeleteToDoItem (state, index) {
    state.todoList.splice(index, 1)
  }
}
