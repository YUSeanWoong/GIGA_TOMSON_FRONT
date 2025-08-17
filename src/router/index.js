import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import ReportPage from '../pages/Report.vue'
import AdvicePage from '../pages/Advice.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'SignUp', component: SignUpPage },
  { path: '/Report', name: 'Report', component: ReportPage },
  { path: '/Advice', name: 'Advice', component: AdvicePage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
