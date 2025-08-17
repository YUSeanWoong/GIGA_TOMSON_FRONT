<template>
  <div class="page">
    <div class="report-card">
      <!-- 상단바 -->
      <header class="topbar">
        <button @click="noop">←</button>
        <h1 class="title">GIGA CHAD</h1>
        <button @click="noop">✕</button>
      </header>

      <!-- 날짜 선택 -->
      <div class="date-select">
        <span>{{ now }}</span>
        <select v-model="date">
          <option>2025-08-17</option>
          <option>2025-08-16</option>
        </select>
      </div>

      <!-- 안내 -->
      <h2 class="subtitle">오늘 한 일을 기록해라.</h2>

      <!-- 활동 리스트 -->
      <div class="activities">
        <div v-for="(task, i) in tasks" :key="i" class="task">
          <button class="name">{{ task.name }}</button>
          <span class="time">{{ task.hour }}시간 {{ task.min }}분</span>
          <button class="delete" @click="removeTask(i)">🗑</button>
        </div>
      </div>

      <!-- 활동 추가 -->
      <button class="add" @click="addTask">＋</button>

      <!-- 완료 버튼 -->
      <button class="complete" @click="noop">완료</button>
    </div>

    <!-- 하단 네비 -->
    <nav class="bottom-nav">
      <button>캘린더</button>
      <button class="active">보고</button>
      <button>조언</button>
      <button>상점</button>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const now = new Date().toLocaleTimeString()
const date = ref('2025-08-17')
const tasks = ref([
  { name: '공부', hour: 0, min: 1 },
  { name: '휴식', hour: 0, min: 1 },
  { name: '독서', hour: 0, min: 1 },
])

const addTask = () => {
  tasks.value.push({ name: '새 활동', hour: 0, min: 1 })
}
const removeTask = (i) => tasks.value.splice(i, 1)

const noop = () => {}
</script>
