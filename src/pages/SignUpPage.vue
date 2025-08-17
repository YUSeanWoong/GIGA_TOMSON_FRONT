<template>
  <div class="signup-container">
    <!-- 상단 바 -->
    <div class="top-bar">
      <button class="back-btn" @click="$router.back()">←</button>
      <div class="title">GIGA CHAD</div>
    </div>

    <!-- 메인 타이틀 -->
    <h1 class="signup-title">회원 가입</h1>

    <!-- 입력 필드 -->
    <input type="text" placeholder="아이디를 입력하세요." v-model="id" />
    <input type="text" placeholder="이름을 입력하세요." v-model="name" />
    <input type="password" placeholder="비밀번호를 입력하세요." v-model="password" />
    <input type="password" placeholder="비밀번호를 한 번 더 입력하세요." v-model="passwordConfirm" />

    <!-- 안내문 -->
    <p class="terms">
      아래 [동의하고 가입하기] 버튼을 터치하면, (이용 약관) 및 (개인 정보 취급 방침)에 동의하게 됩니다.
    </p>

    <!-- 가입 버튼 -->
    <button class="submit-btn">동의하고 가입하기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const id = ref('')
const name = ref('')
const password = ref('')
const passwordConfirm = ref('')
</script>