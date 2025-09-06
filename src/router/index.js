import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '../pages/Layout.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import ReportPage from '../pages/innerPages/Report.vue'
import AdvicePage from '../pages/innerPages/Advice.vue'
import JoinIDPage from '../pages/innerPages/JoinID.vue'
import CalanderPage from '../pages/innerPages/Calander.vue'
import KakaoCallback from '../pages/KakaoCallback.vue'



function isTokenValid() {
  const t = localStorage.getItem('gt_access_token')
  if (!t) return false
  // exp(초) 체크 – 토큰에 exp가 없으면 true로 두고, 있으면 만료 검증
  try {
    const payload = JSON.parse(atob(t.split('.')[1] || ''))
    if (!payload?.exp) return true
    const now = Math.floor(Date.now() / 1000)
    return payload.exp > now
  } catch {
    return false
  }
}

const routes = [
  {
    path: '/',
    component: LayoutPage,
    children: [
      { path: '', redirect: '/Login' }, // 기본 진입
      { path: 'calandar', component: CalanderPage, meta: { requiresAuth: false } },
      { path: 'report', component: ReportPage, meta: { requiresAuth: false } },
      { path: 'advice', component: AdvicePage, meta: { requiresAuth: false }  },
      { path: 'oauth/callback', component: KakaoCallback },
      //{ path: 'shop', component: ShopPage },
    ],
  },
  { path: '/Login', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'SignUp', component: SignUpPage },
  { path: '/JoinID', name: 'JoinID', component: JoinIDPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authed = isTokenValid()

  // 보호 라우트 접근인데 인증 안됨 → 로그인으로 튕기고, 원래 주소 기억
  if (to.meta.requiresAuth && !authed) {
    alert("로그인 후 사용가능합니다.");
    return next({ path: '/login', query: { redirect: to.fullPath } })
  }

  // 로그인 페이지 접근인데 이미 인증됨 → 메인으로
  if (to.meta.requiresGuest && authed) {
    return next({ path: '/advice' })
  }

  next()
})


export default router