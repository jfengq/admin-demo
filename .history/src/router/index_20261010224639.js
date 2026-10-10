import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import UserList from '../views/UserList.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/dashboard',
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: UserList },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router