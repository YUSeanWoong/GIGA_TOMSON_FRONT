<template>
  <div>
    <!-- 날짜 바 (3칸 그리드: 좌 버튼 / 중앙 날짜 / 우 칸 비움) -->
    <div class="advice-date-bar">
      
      <!-- 왼쪽: 보고 버튼 -->
      <div>
        <button @click="goReport"
          aria-label="보고 화면으로 이동"
          class="document-icon-button" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="6" y="4" width="12" height="16" rx="2" ry="2" />
            <line x1="8" y1="8" x2="16" y2="8" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="8" y1="16" x2="14" y2="16" />
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
        <template v-if="adviceMsg">
        <h3>오늘 성취율: {{ percent }}%</h3>
        <p>{{ adviceMsg }}</p>
      </template>
      <template v-else>
        <p>오늘 활동을 보고탭에서 기록해보라고 짜식아</p>
      </template>      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from "vue-router"
import gigaChad1 from '../../images/GIGA_TOMSON.png'
import gigaChad2 from '../../images/GIGA_TOMSON2.jpg'
import gigaChad3 from '../../images/GIGA_TOMSON3.jpg'

const route = useRoute()
const percent = route.query.percent
const adviceMsg = route.query.msg
const _d = getSelectedDate()
const year = _d.getFullYear()
const month = _d.getMonth() + 1
const day = _d.getDate()
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


function getSelectedDate() {
  const raw = new URLSearchParams(window.location.search).get('date')
  const d = raw ? new Date(raw) : new Date()
  return isNaN(d) ? new Date() : d
}






</script>
