<template>
  <swiper-container class="demo-3-container"
                    pagination="true"
                    effect="coverflow"
                    grab-cursor="true"
                    centered-slides="true"
                    slides-per-view="auto"
                    coverflow-effect-rotate="50"
                    coverflow-effect-stretch="0"
                    coverflow-effect-depth="100"
                    coverflow-effect-modifier="1"
                    coverflow-effect-slide-shadows="true"
  >
    <swiper-slide class="demo-3-slide">
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-3-slide">
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
</script>

<style lang='scss' scope>

.demo-3-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.demo-3-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.demo-3-slide img {
  display: block;
  width: 100%;
}
</style>
