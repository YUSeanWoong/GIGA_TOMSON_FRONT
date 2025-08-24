import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '../pages/Layout.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import ReportPage from '../pages/innerPages/Report.vue'
import AdvicePage from '../pages/innerPages/Advice.vue'
import JoinIDPage from '../pages/innerPages/JoinID.vue'
import CalanderPage from '../pages/innerPages/Calander.vue'

const routes = [
  {
    path: '/',
    component: LayoutPage,
    children: [
      { path: '', redirect: '/advice' }, // 기본 진입
      { path: 'calendar', component: CalanderPage },
      { path: 'report', component: ReportPage },
      { path: 'advice', component: AdvicePage },
      //{ path: 'shop', component: ShopPage },
    ],
  },
  { path: '/Login', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'SignUp', component: SignUpPage },
  { path: '/JoinID', name: 'JoinID', component: JoinIDPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
