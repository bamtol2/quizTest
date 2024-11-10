<template>
  <div class="next-page">
    <h1>똑똑한데?!</h1>
    <p>정답입니다!!!</p>
    <p>정답을 맞췄으니 선물을 줘야겠죠?</p>
    <button @click="goToGiftPage">선물 확인하기</button>
  </div>
</template>

<script>
export default {
  name: 'NextPage',
  methods: {
    goToGiftPage() {
      this.$router.push({ name: 'GiftPage' });
    }
  }
};
</script>

<style scoped>
.next-page {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 24px;
  color: green;
}

p {
  font-size: 18px;
  color: blue;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #e15b50;
}
</style>
