<template>
  <div class="page">
    <div class="login-card">
      <div class="version">(버전 정보)</div>

      <h1 class="title">로그인 해라.</h1>

      <div class="avatar">
        <img src="../images/GIGI_TOMSON.png" alt="GIGI_TOMSON" />
      </div>

      <form class="form" @submit.prevent>
        <input type="text" placeholder="아이디" v-model="id" />
        <input type="password" placeholder="비밀번호" v-model="pw" />

        <label class="remember">
          <input type="checkbox" v-model="auto" />
          자동 로그인
        </label>

        <div class="links">
          <button type="button" @click="noop">아이디 찾기</button>
          <button type="button" @click="noop">비밀번호 찾기</button>
          <button type="button" @click="goSignUp">회원가입</button>
        </div>

        <button type="button" class="sns">SNS 로그인</button>
        <button type="button" class="kakao">💬 카카오로 시작</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLoginPage } from '../js/LoginPage.js'
const id = ref(''); const pw = ref(''); const auto = ref(false)
const { goSignUp } = useLoginPage()
const noop = () => {}

</script>