<template>
  <div class="page">
    <!-- 상단바 -->
    <header class="topbar">
      <button class="back-btn" @click="$router.back()">←</button>
      <h1 class="title">GIGA CHAD</h1>
      <button class="close-btn" @click="$router.push('/')">✕</button>
    </header>

    <!-- 메인 -->
    <div class="content">
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
    </div>

    <!-- 하단 네비 -->
    <footer class="navbar">
      <button @click="$router.push('/calendar')">캘린더</button>
      <button @click="$router.push('/report')">보고</button>
      <button @click="$router.push('/advice')">조언</button>
      <button @click="$router.push('/shop')">상점</button>
    </footer>
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

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
}

/* 상단바 */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border-bottom: 1px solid #ddd;
}
.back-btn, .close-btn {
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}
.title {
  font-weight: bold;
}

/* 월 */
.month-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  font-size: 20px;
  font-weight: bold;
}
.month-header button {
  background: none;
  border: none;
  font-size: 20px;
  margin: 0 20px;
  cursor: pointer;
}

/* 요일 */
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
}
.weekday {
  padding: 5px 0;
}

/* 날짜 */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
}
.day-cell {
  height: 60px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  text-align: center;
  position: relative;
  font-size: 14px;
  padding-top: 5px;
}
.emoji {
  font-size: 20px;
  margin-top: 5px;
}

/* 하단 네비 */
.navbar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: white;
  border-top: 1px solid #ddd;
}
.navbar button {
  border: none;
  background: none;
  font-weight: bold;
  cursor: pointer;
}
</style>
