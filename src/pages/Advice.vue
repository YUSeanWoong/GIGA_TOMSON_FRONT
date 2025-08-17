<template>
  <div class="container">
    <!-- 상단 바 -->
    <div class="topbar">
      <button @click="goBack">⟵</button>
      <span>GIGA CHAD</span>
      <button @click="closePage">✖</button>
    </div>

    <!-- 이미지 및 좌우 버튼 -->
    <div class="image-container">
      <button @click="prevImage" class="nav-btn">‹</button>
      <img :src="images[currentIndex]" alt="Giga Chad" class="chad-image" />
      <button @click="nextImage" class="nav-btn">›</button>
    </div>

    <!-- 설명 텍스트 -->
    <div class="description">
      <p>{{ descriptions[currentIndex] }}</p>
    </div>

    <!-- 하단 버튼 -->
    <div class="footer-buttons">
      <button>캘린더</button>
      <button>보고</button>
      <button>조언</button>
      <button>상점</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        require('../images/GIGA_TOMSON.png')  // 여기에 네 이미지 경로 넣어
      ],
      descriptions: [
        "10분? 그건 워밍업이지 공부가 아냐. 책 좀 펼쳤어 '오늘도 해봤다!' 이러는 건 치킨두 꺼내고 치킨 다 먹었다고 우기는 거랑 똑같다."
      ]
    };
  },
  methods: {
    prevImage() {
      if(this.currentIndex > 0) this.currentIndex--;
    },
    nextImage() {
      if(this.currentIndex < this.images.length - 1) this.currentIndex++;
    },
    goBack() {
      // 뒤로가기 로직
      alert("뒤로가기 클릭");
    },
    closePage() {
      // 페이지 닫기 로직
      alert("닫기 클릭");
    }
  }
};
</script>

