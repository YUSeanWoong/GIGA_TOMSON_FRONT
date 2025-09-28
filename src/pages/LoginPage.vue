<template>
  <div class="page">
    <div class="inner-card">

      <h1 class="title">로그인 해라.</h1>

      <div class="avatar">
        <img src="../images/GIGA_TOMSON.png" alt="GIGA_TOMSON" />
      </div>

      <form class="form" @submit.prevent>
       <!--<input type="text" placeholder="아이디" v-model="id" />
        <input type="password" placeholder="비밀번호" v-model="pw" />

        

       <div class="links">
          <button type="button" @click="noop">아이디 찾기</button>
          <button type="button" @click="noop">비밀번호 찾기</button>
          <button type="button" @click="goSignUp">회원가입</button>
        </div>

        <button type="button" class="sns">로그인</button>-->
        <button type="button" class="kakao" @click="onKakaoLogin">💬 카카오로 시작</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLoginPage} from '../js/LoginPage.js'
const id = ref(''); const pw = ref(''); const auto = ref(false)
const { goSignUp, onKakaoLogin } = useLoginPage()
const noop = () => {}



</script>

<style scoped>
/* 로그인 아바타 크게 + 아래 공백 자연스럽게 줄이기 */
.avatar { margin-bottom: clamp(32px, 2vw, 48px); } /* 이미지 아래 여백 살짝만 */
.avatar img{
  width: clamp(220px, 32vw, 380px);
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

@media (min-width: 1024px){
  .avatar img{ width: 280px; } /* 데스크탑에서 더 큼 */
}
</style>

<style scoped>
/* 타이틀 글자 크기 더 키우기 */
.title {
  font-size: clamp(24px, 4vw, 38px); /* 원하는 크기로 조정 */
  font-weight: 900;                  /* 필요하면 굵기 강화 */
}

/* 입력창 너비 버튼들과 맞추기 */
.form input {
  box-sizing: border-box;   /* ✅ 패딩+보더 포함해서 100% */
  width: 100%;              /* 부모 기준 100% */
  margin: 0;                /* 혹시 브라우저 기본 여백 제거 */
}


</style>

