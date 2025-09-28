<template>
  <div class="p-6">로그인 처리 중...</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '../js/axios' // axios가 '../js/axios.js' 경로에 있다고 가정

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const code = route.query.code
  const state = route.query.state
  const savedState = sessionStorage.getItem('kakao_oauth_state')

  // 1. state 불일치 체크
  // URL의 state와 저장된 state가 다르거나, 저장된 state가 없는 경우
  // 세션 스토리지에 state가 없으면 불일치로 간주하여 보안 위험으로 판단합니다.
  if (!state || state !== savedState) {
    alert('로그인 과정에서 보안 문제가 발생했습니다. 다시 시도해 주세요.')
    router.replace('/login')
    return
  }

  // 2. 인가 코드 확인
  if (!code) {
    alert('인가 코드가 없습니다.')
    router.replace('/login')
    return
  }
  
  // 3. state 값 정리 (로그인 성공/실패와 상관없이 바로 제거)
  sessionStorage.removeItem('kakao_oauth_state')

  // 4. 백엔드 서버에 인가 코드 전송
  try {
    console.log(`${import.meta.env.VITE_API_BASE}/auth/kakao/exchange`);
    const res = await axios.post(`${import.meta.env.VITE_API_BASE}/auth/kakao/exchange`, {
      code: code,
      redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI
    })

    const { accessToken, refreshToken } = res.data
    localStorage.setItem('gt_access_token', accessToken)
    if (refreshToken) localStorage.setItem('gt_refresh_token', refreshToken)

    router.replace('/advice')
  } catch (e) {
    console.error('로그인 실패:', e)
    alert('로그인에 실패했습니다.')
    router.replace('/login')
  }
})
</script>