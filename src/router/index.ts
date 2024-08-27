import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import TaskCreateView from '../views/TaskCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView 
    },
    {
      path: '/tasks/create',
      name: 'task-create',
      component: TaskCreateView 
    }
  ]
})

export default router
