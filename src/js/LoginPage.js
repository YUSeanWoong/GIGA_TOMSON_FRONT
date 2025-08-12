// src/scripts/LoginPage.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useLoginPage() {


  const router = useRouter()
  const goSignUp = () => {
    router.push('/signup')
  }

  return { goSignUp }
}