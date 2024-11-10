<template>
  <div class="gift-page">
    <h1>비하인드 스토리</h1>
    <p>비하인드 스토리를 확인해보세요!!.</p>

    <button @click="showGiftDetails" v-if="!showGift" class="gift-button">비하인드스토리 보기</button>
    <button @click="backToMainPage" v-if="!showGift" class="gift-button">홈으로 돌아가기</button>

    <div v-if="showGift" class="gift-box">
      <img src="@/assets/mangGom2.png" alt="Gift" />

      <p v-if="currentStep >= 1">안녕하세요! 저는 꼬질한망곰이에요</p>
      <p v-if="currentStep >= 2">오늘은 사실 11월 11일 빼빼로 데이였답니다..!</p>
      <p v-if="currentStep >= 3">혹시 여기에 얽힌 비하인드 스토리가 궁금하신가요?!</p>

      <div v-if="currentStep === 3" class="options">
        <button @click="answerYes">응!</button>
        <button @click="answerNo">아니~</button>
      </div>

      <p v-if="currentStep >= 4">비하인드 스토리를 알려드릴게요..!</p>
      <p v-if="currentStep >= 5">성우님은 이걸 싸피에 가져가면 광역 어그로 끌릴거같아서 둘이 만나서 따로 주고싶었데요..!</p>
      <p v-if="currentStep >= 6">하지만 집순이 혜원님을 집에서 꺼내오기가 쉽지만은 않았다고 들었어요!</p>
      <p v-if="currentStep >= 7">저는 성우님이 거짓말을 잘 못한다고 알고있어요..!</p>
      <p v-if="currentStep >= 8">다행이도 사고? 라는 좋은 핑계가 생겨서 차타고 주고왔다는.. 비하인드 스토리!</p>
      <p v-if="currentStep >= 9">푸하하! 재미있으셨나요?!</p>
      <p v-if="currentStep >= 10">다행이네요! ㅎㅎ</p>
      <p v-if="currentStep >= 11">맛있게 먹어요! 이쁜 혜원님!!</p>
      <p v-if="currentStep >= 12">아..! 그리고 저도 혜원님께 선물을 드릴게요!</p>

      <div v-if="currentStep === 12" class="options">
        <button @click="showGiftImage">선물이 뭐야?</button>
      </div>

      <div v-if="showGiftImageModal" class="image-modal" @click="closeGiftImageModal">
        <img src="@/assets/date.png" alt="Gift Image" class="gift-image" />
      </div>

      <div v-if="currentStep === 9" class="options">
        <button @click="answerYes">응!</button>
        <button @click="answerNo">아니~</button>
      </div>

      <p v-if="showIncorrectMessage">땡! 혜원이 바보</p>

      <button v-if="currentStep !== 3 && currentStep !== 9 && currentStep !== 12" @click="nextStep">다음으로</button>
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
      showIncorrectMessage: false,
      showGiftImageModal: false,
    };
  },
  methods: {
    showGiftDetails() {
      this.showGift = true;
      this.currentStep = 1;
    },
    nextStep() {
      if (this.currentStep < 11) {
        this.currentStep += 1;
      } else if (this.currentStep === 11) {
        this.currentStep = 12; // 11에서 12로 넘어가도록 설정
      }
    },
    answerYes() {
      if (this.currentStep === 9) {
        this.currentStep = 10;
      } else if (this.currentStep === 3) {
        this.currentStep = 4;
      }
      this.showIncorrectMessage = false;
    },
    answerNo() {
      if (this.currentStep === 9 || this.currentStep === 3) {
        this.showIncorrectMessage = true;
      }
    },
    backToMainPage() {
      this.$router.push({ name: 'MainPage' });
    },
    showGiftImage() {
      this.showGiftImageModal = true;
    },
    closeGiftImageModal() {
      this.showGiftImageModal = false;
    },
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

.image-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.gift-image {
  max-width: 90%;
  max-height: 80%;
  border-radius: 10px;
}
</style>
