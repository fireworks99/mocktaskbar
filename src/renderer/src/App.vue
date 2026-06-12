<script setup lang="ts">
import dayjs from 'dayjs';
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref(dayjs().format('HH:mm'));
const currentDate = ref(dayjs().format('YYYY/M/D'));

let timer: ReturnType<typeof setInterval>;

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = dayjs().format('HH:mm');
    currentDate.value = dayjs().format('YYYY/M/D');
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="taskbar">
    <div class="left">
      <img src="./assets/img/win11.svg" alt="">
      <img src="./assets/img/search.svg" alt="">
      <img src="./assets/img/folder.png" alt="">
      <img src="./assets/img/chrome.svg" alt="">
    </div>
    <div class="right">
      <img src="./assets/img/zh-CN.svg" alt="">
      <img src="./assets/img/input.svg" alt="">
      <img src="./assets/img/disconnect.svg" alt="">
      <img src="./assets/img/volume.svg" alt="">
      <img src="./assets/img/battery.svg" alt="">
      <div class="datetime">
        <div class="top">{{ currentTime }}</div>
        <div class="bottom">{{ currentDate }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.taskbar {
  width: 100vw;
  height: 100vh;

  background: #eee;

  color: #191919;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;

    img {

      &:nth-of-type(1) {
        height: 28px;
        width: 28px;
        margin-left: 18px;
      }

      &:nth-of-type(2) {
        height: 24px;
        width: 24px;
        margin-left: 20px;
      }

      &:nth-of-type(3) {
        height: 30px;
        width: 30px;
        margin-left: 16px;
      }

      &:nth-of-type(4) {
        height: 26px;
        width: 26px;
        margin-left: 16px;
      }
      
    }
  }

  .right {
    display: flex;
    align-items: center;

    img {

      &:nth-of-type(1) {
        height: 28px;
        margin-right: 10px;
      }

      &:nth-of-type(2) {
        height: 20px;
        margin-right: 18px;
      }

      &:nth-of-type(3) {
        height: 20px;
        margin-right: 10px;
      }

      &:nth-of-type(4) {
        height: 16px;
        margin-right: 10px;
      }

      &:nth-of-type(5) {
        height: 18px;
        margin-right: 14px;
      }
    }

    .datetime {
      font-size: 12px;
      text-align: right;
      margin-right: 20px;
    }
  }
}
</style>