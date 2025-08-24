<template>
  <div class="page">
    <!-- 상단바 -->
    <header class="topbar">
      <button class="back-btn" @click="$router.back()">←</button>
      <h1 class="title">GIGA CHAD</h1>
    </header>

    <!-- 메인 컨텐츠 -->
    <div class="content">
      <h2 class="headline">아이디 찾기</h2>

      <!-- 휴대전화로 찾기 -->
      <div class="section">
        <label>
          <input type="checkbox" v-model="usePhone" />
          휴대전화로 찾기
        </label>

        <input
          type="text"
          v-model="name"
          placeholder="이름"
          class="input"
        />
        <input
          type="text"
          v-model="phone"
          placeholder="휴대전화 (000-0000-0000)"
          class="input"
        />

        <button class="primary-btn">휴대폰 인증 요청</button>
      </div>

      <!-- 이메일로 찾기 -->
      <div class="section">
        <label>
          <input type="checkbox" v-model="useEmail" />
          이메일로 찾기
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindIdPage",
  data() {
    return {
      usePhone: false,
      useEmail: false,
      name: "",
      phone: "",
    };
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
  padding: 10px;
  background: white;
  border-bottom: 1px solid #ddd;
}
.back-btn {
  border: none;
  background: none;
  font-size: 18px;
  margin-right: 10px;
}
.title {
  flex: 1;
  text-align: center;
  font-weight: bold;
}

/* 메인 */
.content {
  flex: 1;
  padding: 20px;
  text-align: center;
}
.headline {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}
.section {
  margin-bottom: 30px;
  text-align: left;
}
.input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #aaa;
  border-radius: 8px;
}
.primary-btn {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: black;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
