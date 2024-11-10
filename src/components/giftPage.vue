<template>
  <div class="gift-page">
    <h1>🎉 선물이 도착했습니다! 🎉</h1>
    <p>축하합니다! 당신은 정말 멋져요! 이제 선물을 확인해보세요.</p>

    <button @click="showGiftDetails" v-if="!showGift" class="gift-button">선물 자세히 보기</button>
    <button @click="backToMainPage" v-if="!showGift" class="gift-button">홈으로 돌아가기</button>

    <div v-if="showGift" class="gift-box">
      <img src="@/assets/mangGom.png" alt="Gift" />

      <p v-if="currentStep >= 1">안녕하세요! 저는 망곰이에요</p>
      <p v-if="currentStep >= 2">제가 성우님의 비밀을 하나 알고있는데..</p>
      <p v-if="currentStep >= 3">혹시 궁금하신가요?!</p>
      
      <!-- "응!"과 "아니;" 버튼이 나타나는 단계 -->
      <div v-if="currentStep === 3" class="options">
        <button @click="answerYes">응!</button>
        <button @click="answerNo">아니;</button>
      </div>

      <!-- 정답일 때 다음으로 이동 -->
      <p v-if="currentStep >= 4">비밀을 알려줄게요! 🎉</p>
      <p v-if="currentStep >= 5">사실.. 오늘 생일인 친구는 없다고 들었어요..!</p>
      <p v-if="currentStep >= 6">아까 선물을 주고 갔다고 들었는데 그걸 한번 열어보실래요?!</p>

      <!-- "열어본 다음에 클릭!!" 버튼 추가 -->
      <button v-if="currentStep >= 6" @click="goToFinalPage" class="gift-button">열어본 다음에 클릭!!</button>

      <!-- 오답일 때 메시지 출력 -->
      <p v-if="showIncorrectMessage">땡! 틀렸습니다</p>

      <button v-if="currentStep < 6 && currentStep !== 3" @click="nextStep">다음으로</button>
    </div>

    <button v-if="showGift" @click="backToMainPage" class="gift-button">홈으로 돌아가기</button>
  </div>
</template>

<script>
export default {
  name: 'GiftPage',
  data() {
    return {
      showGift: false,
      currentStep: 0,
      showIncorrectMessage: false
    };
  },
  methods: {
    showGiftDetails() {
      this.showGift = true;
      this.currentStep = 1;
    },
    nextStep() {
      if (this.currentStep < 6) { // currentStep을 6까지 증가시킴
        this.currentStep += 1;
      }
    },
    answerYes() {
      this.currentStep = 4; // 다음 단계로 넘어감
      this.showIncorrectMessage = false; // 틀린 메시지 숨김
    },
    answerNo() {
      this.showIncorrectMessage = true; // 틀린 메시지 표시
    },
    backToMainPage() {
      this.$router.push({ name: 'MainPage' });
    },
    goToFinalPage() {
      this.$router.push({ name: 'FinalPage' }); // final.vue로 이동
    }
  }
};
</script>

<style scoped>
.gift-page {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 32px;
  color: #ff6347;
  margin-bottom: 20px;
}

p {
  font-size: 20px;
  color: #333;
}

.gift-box {
  margin-top: 30px;
  border: 2px solid #ff6f61;
  padding: 20px;
  display: inline-block;
  border-radius: 10px;
}

.gift-box img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
}

button.gift-button {
  padding: 12px 25px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}

button.gift-button:hover {
  background-color: #45a049;
}

.options button {
  padding: 8px 15px;
  font-size: 16px;
  background-color: #f0ad4e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.options button:hover {
  background-color: #ec971f;
}
</style>
