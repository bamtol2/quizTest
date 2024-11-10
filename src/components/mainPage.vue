<template>
  <div id="app">
    <h1>오늘의 날짜를 입력해주세요!!</h1>
    <input type="date" v-model="selectedDate" />
    <button @click="checkDate">확인</button>
    <p v-if="selectedDate">혜원이의 선택: {{ selectedDate }}</p>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      selectedDate: '' 
    };
  },
  methods: {
    checkDate() {
      if (this.selectedDate === '2024-11-11') {
        this.$router.push({ name: 'NextPage' });
      } else {
        alert('혜원이 바보.');
      }
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

input[type="date"] {
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
