<template>
  <div>
    <!-- 날짜 바 (중앙 정렬, 깔끔 스타일) -->
  <div class="advice-date-bar">
  <button class="date-nav prev" aria-label="이전 날짜"></button>
  <div class="date-label">{{ year }}년 {{ month }}월 {{ day }}일</div>
  <button class="date-nav next" aria-label="다음 날짜"></button>
  </div>

    <!-- 이미지 및 좌우 버튼 -->
    <div class="image-container">
      <button @click="prevImage" class="nav-btn left" :disabled="currentIndex === 0">‹</button>
      <img :src="images[currentIndex]" alt="Giga Chad" class="chad-image" />
      <button @click="nextImage" class="nav-btn right" :disabled="currentIndex === images.length - 1">›</button>
    </div>

    <!-- 설명 텍스트 -->
    <div class="description">
      <p>{{ descriptions[currentIndex] }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ---- 날짜: URL ?date=YYYY-MM-DD 있으면 사용, 없으면 오늘 ----
function getSelectedDate() {
  const raw = new URLSearchParams(window.location.search).get('date') // e.g. 2025-08-10
  const d = raw ? new Date(raw) : new Date()
  return isNaN(d) ? new Date() : d
}
const _d = getSelectedDate()
const year = _d.getFullYear()
const month = _d.getMonth() + 1
const day = _d.getDate()
const weekday = ['일','월','화','수','목','금','토'][_d.getDay()]

// ---- 기존 코드 그대로 ----
// 이미지 여러 개 import
import gigaChad1 from '../../images/GIGA_TOMSON.png'
import gigaChad2 from '../../images/GIGA_TOMSON2.jpg'
import gigaChad3 from '../../images/GIGA_TOMSON3.jpg'

// 현재 이미지 인덱스
const currentIndex = ref(0)

// 이미지 배열
const images = ref([gigaChad1, gigaChad2, gigaChad3])

// 이미지 설명 배열 (이미지 순서에 맞춰)
const descriptions = ref([
  "첫 번째 GIGA CHAD: 오늘도 워밍업은 충분히 했는가?",
  "두 번째 GIGA CHAD: 집중력이 필요할 땐 잠깐 숨을 고르자.",
  "세 번째 GIGA CHAD: 끝까지 밀어붙이면 진짜 기가챠드."
])

// 이전/다음 이미지
const prevImage = () => { if (currentIndex.value > 0) currentIndex.value-- }
const nextImage = () => { if (currentIndex.value < images.value.length - 1) currentIndex.value++ }

// 상단 버튼(필요하면 사용)
const goBack = () => alert("뒤로가기 클릭")
const closePage = () => alert("닫기 클릭")
</script>
