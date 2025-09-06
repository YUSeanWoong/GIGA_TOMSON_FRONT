// src/scripts/LoginPage.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'



export function useLoginPage() {


  const router = useRouter()
  const goSignUp = () => {
    router.push('/signup')
  }
  const onKakaoLogin = async () => {

    const REST_KEY = import.meta.env.VITE_KAKAO_REST_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI; // 예: http://localhost/oauth/callback
    
    
      if (!REST_KEY || !REDIRECT_URI) {
        alert('환경변수(VITE_KAKAO_REST_KEY, VITE_KAKAO_REDIRECT_URI)가 누락되었습니다.');
        return;
      }

    const state = crypto.getRandomValues(new Uint32Array(4)).join('-');
    sessionStorage.setItem('kakao_oauth_state', state);

    const url = new URL('https://kauth.kakao.com/oauth/authorize');
    url.searchParams.set('client_id', REST_KEY);
    url.searchParams.set('redirect_uri', REDIRECT_URI);
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('state', state);
    

    window.location.href = url.toString();
  }

    return { goSignUp, onKakaoLogin }
  }







