<template>
  <!-- 현재 월 -->
  <div class="month-header">
    <button @click="prevMonth">〈</button>
    <span>{{ currentYear }}년 {{ currentMonth + 1 }}월</span>
    <button @click="nextMonth">〉</button>
  </div>

  <!-- 요일 -->
  <div class="weekdays">
    <div v-for="day in weekDays" :key="day" class="weekday">{{ day }}</div>
  </div>

  <!-- 날짜 -->
  <div class="calendar-grid">
    <div
      v-for="(date, index) in dates"
      :key="index"
      class="day-cell"
    >
      <span>{{ date.day || '' }}</span>

      <!-- 성취율 기반 이모지 (임시 로직) -->
      <div v-if="date.emoji" class="emoji">{{ date.emoji }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarPage",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(), // 0 = 1월
      weekDays: ["일", "월", "화", "수", "목", "금", "토"],
    };
  },
  computed: {
    dates() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

      let days = [];

      // 앞 공백
      for (let i = 0; i < firstDay; i++) {
        days.push({ day: null });
      }

      // 날짜 + 임시 이모티콘
      for (let d = 1; d <= lastDate; d++) {
        let emoji = "";
        // 예시: 짝수날짜 -> 😀 , 홀수날짜 -> ☹️
        if (d % 2 === 0) emoji = "😀";
        else emoji = "☹️";

        days.push({ day: d, emoji });
      }

      return days;
    },
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      } else {
        this.currentMonth -= 1;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      } else {
        this.currentMonth += 1;
      }
    },
  },
};
</script>

