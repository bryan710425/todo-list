import Vue from 'vue'
import Vuex from 'vuex'
import todoList from './todoList/todoListStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todoList
  }
})
