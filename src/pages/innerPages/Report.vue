<template>
  <!-- 날짜 선택 -->
  <div class="date-select">
    <select v-model="date">
      <option>2025-08-17</option>
      <option>2025-08-16</option>
    </select>
  </div>

  <!-- 타이틀 -->
  <h2 class="subtitle">오늘 한 일을 기록해라.</h2>

  <!-- 활동 리스트 -->
  <div class="activities">
    <div v-for="(task, i) in tasks" :key="i" class="task">
      <span class="name">{{ task.name }}</span>
      <span class="time">{{ task.hour }}시간 {{ task.min }}분</span>
      <button class="delete" @click="removeTask(i)">🗑</button>
    </div>
  </div>

  <!-- 활동 추가 -->
  <button class="add" @click="addTask">+ 활동 추가</button>

  <!-- 완료 버튼 -->
  <button class="complete" @click="noop">완료</button>
   
</template>

<script setup>
import { ref } from 'vue'

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

