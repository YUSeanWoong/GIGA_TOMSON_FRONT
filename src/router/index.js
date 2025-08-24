import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import ReportPage from '../pages/Report.vue'
import AdvicePage from '../pages/Advice.vue'
import JoinIDPage from '../pages/JoinID.vue'
import CalanderPage from '../pages/Calander.vue'

const routes = [
  { path: '/Login', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'SignUp', component: SignUpPage },
  { path: '/report', name: 'Report', component: ReportPage },
  { path: '/advice', name: 'Advice', component: AdvicePage },
  { path: '/JoinID', name: 'JoinID', component: JoinIDPage },
  { path: '/Calander', name: 'Calander', component: CalanderPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
