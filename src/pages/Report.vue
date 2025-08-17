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

<style scoped>
.page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: #f4f5f7;
}

/* 카드 */
.report-card {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  margin: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

/* 상단바 */
.topbar {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 16px;
}
.topbar button { background:none; border:none; font-size:18px; cursor:pointer; }
.title { font-size: 20px; font-weight: 800; }

/* 날짜 */
.date-select {
  display:flex; align-items:center; justify-content:space-between;
  margin-bottom: 12px;
  font-size:14px; color:#444;
}
.date-select select {
  border:1px solid #ccc; border-radius:8px; padding:4px 8px;
}

/* 안내 */
.subtitle {
  text-align:center;
  font-weight:700;
  margin: 16px 0;
}

/* 활동 */
.activities { flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px; }
.task {
  display:flex; justify-content:space-between; align-items:center;
  border:1px solid #ddd; border-radius:10px; padding:10px;
}
.task .name { border:none; background:#fafafa; border-radius:6px; padding:6px 10px; }
.task .delete { background:none; border:none; cursor:pointer; }

/* 버튼 */
.add, .complete {
  margin-top: 12px;
  border:none; border-radius:12px;
  padding:12px;
  font-weight:700;
  cursor:pointer;
}
.add { background:#fafafa; border:1px dashed #aaa; font-size:20px; }
.complete { background:#111; color:#fff; }

/* 하단 네비 */
.bottom-nav {
  display:grid; grid-template-columns: repeat(4,1fr);
  border-top:1px solid #ddd;
}
.bottom-nav button {
  padding:12px 0; border:none; background:#fff;
  font-size:14px; cursor:pointer;
}
.bottom-nav .active { font-weight:700; color:#111; }
</style>
