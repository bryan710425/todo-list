import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    component: () => import('@/views/ToDoList.vue')
  },
  {
    path: '/created',
    name: 'Created',
    component: () => import('@/views/Created.vue')
  },
  {
    path: '/Edit/:id',
    name: 'Edit',
    component: () => import('@/views/Created.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
