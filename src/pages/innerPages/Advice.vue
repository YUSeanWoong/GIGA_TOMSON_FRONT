<template>
  <div>
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

// 이전 이미지
const prevImage = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

// 다음 이미지
const nextImage = () => {
  if (currentIndex.value < images.value.length - 1) currentIndex.value++
}

// 상단 버튼 기능
const goBack = () => alert("뒤로가기 클릭")
const closePage = () => alert("닫기 클릭")
</script>

