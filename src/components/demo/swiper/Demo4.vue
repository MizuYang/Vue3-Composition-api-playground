<template>
  <swiper-container class="mySwiper" effect="cards" grab-cursor="true" style="max-width:240px;height:300px;">
    <swiper-slide class="demo-4-slide">Slide 1</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 2</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 3</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 4</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 5</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 6</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 7</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 8</swiper-slide>
    <swiper-slide class="demo-4-slide">Slide 9</swiper-slide>
  </swiper-container>
</template>

<script setup>
</script>

<style lang='scss' scope>
.demo-4-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.demo-4-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.demo-4-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.demo-4-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.demo-4-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.demo-4-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.demo-4-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.demo-4-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.demo-4-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.demo-4-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.demo-4-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
