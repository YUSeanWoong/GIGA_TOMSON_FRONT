<template>
  <div class="page">
    <div class="inner-card">

      <!-- 상단바 -->
      <header class="topbar">
        <button @click="$router.back()">←</button>
        <h1 class="title">GIGA CHAD</h1>
        <button @click="closePage">✕</button>
      </header>

      <!-- 본문 (라우터가 바꿔주는 부분) -->
      <div class="sub_cont">
        <router-view />
      </div>

      <!-- 하단 메뉴 -->
      <nav class="footer-menu">
        <button @click="$router.push('/calandar')">캘린더</button>
        <button @click="$router.push('/report')">보고</button>
        <button @click="$router.push('/advice')">조언</button>
        <button @click="$router.push('/shop')">상점</button>
      </nav>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function closePage() {
  // 예시: 메인 화면으로 이동
  router.push('/')
}
</script>