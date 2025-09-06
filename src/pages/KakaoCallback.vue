<template>
  <div class="p-6">로그인 처리 중...</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '../js/axios'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const code = route.query.code
  const state = route.query.state
  const savedState = sessionStorage.getItem('kakao_oauth_state')

  if (!code) {
    alert('인가 코드가 없습니다.')
    router.replace('/login')
    return
  }
  if (state !== savedState) {
    alert('state 불일치 - 보안 위반 가능성')
    router.replace('/login')
    return
  }

  
  try {
 
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE}/auth/kakao/exchange?code=${code}`
      // {
      //   code,
      //   redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI
      // }
    )

    
    const { accessToken, refreshToken } = res.data
    localStorage.setItem('gt_access_token', accessToken)
    if (refreshToken) localStorage.setItem('gt_refresh_token', refreshToken)

    router.replace('/advice')
  } catch (e) {
    console.error(e)
    alert('로그인 실패')
    router.replace('/login')
  } finally {
    sessionStorage.removeItem('kakao_oauth_state')
  }
})
</script>