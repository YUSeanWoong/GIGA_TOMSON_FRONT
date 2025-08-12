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

<style scoped>
/* 레이아웃 */
.page{
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 16px;
  background: #f4f5f7;
}

/* 카드: 모바일~태블릿~데스크탑에서 부드럽게 확장 */
.login-card{
  width: min(100%, clamp(360px, 48vw, 720px));
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  padding: clamp(20px, 4vw, 40px);
  position: relative;
}

/* 버전 표시 좌상단 */
.version{
  position: absolute; inset: clamp(12px, 2vw, 20px) auto auto clamp(12px, 2vw, 20px);
  font-size: clamp(11px, 1.3vw, 13px);
  color:#7a7f87;
}

/* 타이틀, 아바타 */
.title{
  text-align:center;
  font-weight: 800;
  letter-spacing:-0.3px;
  font-size: clamp(22px, 3.2vw, 40px);
  margin: 0 0 clamp(14px, 2.4vw, 24px);
}
.avatar{
  display:flex; justify-content:center; margin-bottom: clamp(16px, 3vw, 28px);
}
.avatar img{
  width: clamp(120px, 18vw, 220px);
  height: auto; border-radius: 12px; object-fit: cover;
}

/* 폼 */
.form{ display:flex; flex-direction:column; gap: clamp(10px, 2vw, 16px); }

.form input{
  width:100%;
  border:1px solid #d0d5dd;
  border-radius: 10px;
  padding: 0 14px;
  min-height: clamp(42px, 5.2vw, 56px);      /* iPad 터치 타겟 확대 */
  font-size: clamp(14px, 1.8vw, 18px);
  outline:none; background:#fafafa;
}
.form input:focus{ border-color:#111; background:#fff; }

/* 자동 로그인 */
.remember{
  display:flex; align-items:center; gap:10px;
  color:#475467; font-size: clamp(13px, 1.6vw, 16px);
}

/* 작은 링크 버튼 영역: 모바일=세로, 태블릿↑=3열 */
.links{
  display:grid; gap:10px;
  grid-template-columns: 1fr;
}
.links button{
  border:1px solid #d0d5dd; background:#fff; border-radius:10px;
  min-height: clamp(38px, 4.8vw, 50px);
  font-size: clamp(13px, 1.7vw, 16px);
}
@media (min-width: 768px){           /* iPad 세로 포함 */
  .links{ grid-template-columns: repeat(3, 1fr); }
}

/* 메인 버튼들 */
.sns, .kakao{
  border:none; border-radius: 12px;
  min-height: clamp(46px, 6vw, 60px);
  font-weight: 700;
  font-size: clamp(14px, 2vw, 18px);
  cursor:pointer;
}
.sns{ background:#111; color:#fff; }
.kakao{ background:#FEE500; color:#181600; }

/* iPad Pro(1024px+)에서 더 시원하게 */
@media (min-width: 1024px){
  .login-card{ width: min(100%, 640px); }
  .avatar img{ width: 200px; }
}

/* 노치/세이프에어리어 대응 */
@supports (padding: max(0px)){
  .page{ padding: max(16px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(16px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left)); }
}
</style>