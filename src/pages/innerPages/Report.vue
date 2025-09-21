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
  <div class="activities" ref="activitiesContainer">
    <!-- 각 행 DOM 참조는 setTaskRef()로 처리 -->
    <div
      v-for="(task, i) in tasks"
      :key="i"
      class="task"
      :ref="el => setTaskRef(i, el)"
    >
      <span class="name">{{ task.name }}</span>

      <!-- 시간 클릭 → 팝오버 열기 (클릭 위치 기준) -->
      <span class="time" @click.stop="openTime(i, $event)">
        {{ task.hour }}시간 {{ task.min }}분
      </span>

      <button class="delete" @click="removeTask(i)">🗑</button>

      <!-- 시간/분 설정 팝오버 (행 내부에서 위치 지정) -->
      <div
        v-if="activeIndex === i"
        ref="popoverEl"
        class="time-popover"
        :style="popoverStyle"
        @click.stop
      >
        <div class="tp-row">
          <label>시간</label>
          <input type="number" min="0" max="23" v-model.number="draft.hour" />
        </div>
        <div class="tp-row">
          <label>분</label>
          <input type="number" min="0" max="59" v-model.number="draft.min" />
        </div>
        <div class="tp-actions">
          <button class="tp-cancel" @click="closeTime">취소</button>
          <button class="tp-apply" @click="applyTime">적용</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 활동 추가 -->
  <button class="add" @click="addTask">+ 활동 추가</button>

  <!-- 완료 버튼 -->
  <button class="complete" @click="noop">완료</button>

</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'


const date = ref('2025-08-17')
const tasks = ref([
  { name: '공부', hour: 0, min: 0 },
  { name: '업무', hour: 0, min: 0 },
  { name: '자기계발', hour: 0, min: 0 },
  { name: '독서', hour: 0, min: 0 },
  { name: '운동', hour: 0, min: 0 },
  { name: '유튜브', hour: 0, min: 0 },
  { name: '집안일', hour: 0, min: 0 },
  { name: '수면', hour: 0, min: 0 },
  { name: '친구', hour: 0, min: 0 }, 
  { name: '게임', hour: 0, min: 0 },
])

const activitiesContainer = ref(null)

/* ===== 팝오버 상태 ===== */
const activeIndex   = ref(null)          // 열려 있는 행 index
const draft         = ref({ hour: 0, min: 0 })
const popoverEl     = ref(null)
const popoverStyle  = ref({})            // { left, top, width }
const taskRefs      = ref([])            // 각 행 DOM 저장
const POP_W         = 220                // 팝오버 너비(px)

/* 각 행의 DOM ref 저장 (반드시 .value로 접근) */
const setTaskRef = (i, el) => { taskRefs.value[i] = el }

/* 시간 클릭 → 팝오버 위치 계산(클릭한 텍스트 바로 아래) */
const openTime = (i, e) => {
  activeIndex.value = i
  draft.value = { hour: tasks.value[i].hour, min: tasks.value[i].min }

  const timeEl = e?.currentTarget
  const taskEl = taskRefs.value[i]
  if (timeEl && taskEl) {
    // task(행)을 기준으로 좌표 계산
    let left = timeEl.offsetLeft
    left = Math.max(0, Math.min(left, taskEl.clientWidth - POP_W)) // 좌/우 경계 보호
    const top = timeEl.offsetTop + timeEl.offsetHeight + 8
    popoverStyle.value = { left: left + 'px', top: top + 'px', width: POP_W + 'px' }
  } else {
    // 혹시 못 찾았을 때 기본 위치
    popoverStyle.value = { right: '10px', top: 'calc(100% + 6px)', width: POP_W + 'px' }
  }
}

const closeTime = () => { activeIndex.value = null }

/* 입력값 보정 */
const clamp = (n, min, max) => {
  n = Number.isFinite(+n) ? +n : 0
  if (n < min) n = min
  if (n > max) n = max
  return Math.trunc(n)
}

const applyTime = () => {
  if (activeIndex.value == null) return
  const i = activeIndex.value
  tasks.value[i].hour = clamp(draft.value.hour, 0, 23)
  tasks.value[i].min  = clamp(draft.value.min,  0, 59)
  closeTime()
}

/* 바깥 클릭/ESC로 닫기 */
const onDocClick = (e) => {
  if (!popoverEl.value) { activeIndex.value = null; return }
  if (!popoverEl.value.contains(e.target)) activeIndex.value = null
}
const onKey = (e) => { if (e.key === 'Escape') closeTime() }

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})

/* 기존 기능 */
const addTask = async () => {
  tasks.value.push({ name: '새 활동', hour: 0, min: 1 })
  await nextTick()
  activitiesContainer.value.scrollTop = activitiesContainer.value.scrollHeight
}
const removeTask = (i) => tasks.value.splice(i, 1)
const noop = () => {}
</script>

<style scoped>
/* 행은 위치 기준 컨테이너 */
.activities .task { position: relative; }

/* 클릭 가능한 시간 텍스트 (밑줄/점선 없음) */
.task .time{
  cursor: pointer;
  border-bottom: none;
  text-decoration: none;
}
.task .time:hover{ color:#2563eb; }

/* 팝오버: openTime()에서 준 left/top으로 배치 */
.time-popover{
  position: absolute;
  left: 0;                   /* 기본값(실제 값은 :style로 덮임) */
  top: calc(100% + 6px);     /* 기본값(실제 값은 :style로 덮임) */
  width: 220px;
  padding: 10px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 26px rgba(0,0,0,.12);
  overflow: hidden;
  z-index: 20;
}
.time-popover::before{
  content:"";
  position:absolute;
  top:-6px; left:24px;       /* 왼쪽 기준 화살표 */
  width:12px; height:12px;
  background:#fff;
  border-left:1px solid #e5e7eb; border-top:1px solid #e5e7eb;
  transform: rotate(45deg);
}

/* 라인: 라벨을 살짝 위로 올려 입력과 정렬 */
.time-popover .tp-row{
  display:grid;
  grid-template-columns: 36px 1fr;
  align-items:center;
  gap:8px;
  margin-bottom:8px;
}
.time-popover .tp-row label{
  display:flex; align-items:center;
  height:36px; line-height:1;
  transform: translateY(-3px); /* 필요시 -2~-5px로 미세조정 */
  color:#6b7280; font-size:12px; margin:0;
}
.time-popover .tp-row input{
  height:36px; padding:0 10px;
  width:100%; min-width:0; max-width:100%;
  box-sizing:border-box;
  border:1px solid #d1d5db; border-radius:8px; outline:none;
}
.time-popover .tp-row input:focus{ border-color:#2563eb; }

/* 액션 버튼 */
.time-popover .tp-actions{
  display:flex; justify-content:flex-end; gap:8px; margin-top:6px;
}
.time-popover .tp-cancel{
  background:#f3f4f6; border:1px solid #e5e7eb;
  border-radius:8px; padding:6px 10px; font-size:13px; cursor:pointer;
}
.time-popover .tp-apply{
  background:#111; color:#fff; border:none;
  border-radius:8px; padding:6px 12px; font-size:13px; cursor:pointer;
}
</style>
