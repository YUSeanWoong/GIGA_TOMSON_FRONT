<template>
  <div>
    <!-- 날짜 바 (3칸 그리드: 좌 버튼 / 중앙 날짜 / 우 칸 비움) -->
    <div class="advice-date-bar">
      
      <!-- 왼쪽: 보고 버튼 -->
      <div class="date-left">
        <button
          class="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition"
          @click="goReport"
          aria-label="보고 화면으로 이동"
        >
          <!-- 문서 아이콘 -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <!-- 문서 테두리 -->
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7 4h10a2 2 0 012 2v12a2 2 0 
                     01-2 2H7a2 2 0 01-2-2V6a2 2 0 
                     012-2z"/>
            <!-- 문서 줄 3개 -->
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6M9 12h6M9 16h4"/>
          </svg>
        </button>
      </div>

      <!-- 중앙: 날짜 텍스트 -->
      <div class="date-label">
        {{ year }}년 {{ month }}월 {{ day }}일
      </div>

      <!-- 오른쪽 칸 (비워둠, 필요시 버튼 넣을 수 있음) -->
      <div></div>
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

function getSelectedDate() {
  const raw = new URLSearchParams(window.location.search).get('date')
  const d = raw ? new Date(raw) : new Date()
  return isNaN(d) ? new Date() : d
}
const _d = getSelectedDate()
const year = _d.getFullYear()
const month = _d.getMonth() + 1
const day = _d.getDate()

import gigaChad1 from '../../images/GIGA_TOMSON.png'
import gigaChad2 from '../../images/GIGA_TOMSON2.jpg'
import gigaChad3 from '../../images/GIGA_TOMSON3.jpg'

const currentIndex = ref(0)
const images = ref([gigaChad1, gigaChad2, gigaChad3])
const descriptions = ref([
  "첫 번째 GIGA CHAD: 오늘도 워밍업은 충분히 했는가?",
  "두 번째 GIGA CHAD: 집중력이 필요할 땐 잠깐 숨을 고르자.",
  "세 번째 GIGA CHAD: 끝까지 밀어붙이면 진짜 기가챠드."
])

const prevImage = () => { if (currentIndex.value > 0) currentIndex.value-- }
const nextImage = () => { if (currentIndex.value < images.value.length - 1) currentIndex.value++ }

const goReport = () => {
  console.log("보고 화면으로 이동 예정")
}
</script>
