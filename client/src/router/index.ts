import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddEditView from '../views//AddEditView.vue'
import History from '../views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
        path: '/addedit',
        name: 'addedit',
        component: AddEditView,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
  ]
})

export default router