import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import UserList from '../views/UserList.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/login', component: Login },
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path !== '/login' && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router