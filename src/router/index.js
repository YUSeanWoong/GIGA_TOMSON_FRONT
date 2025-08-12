import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'SignUp', component: SignUpPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})