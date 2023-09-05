<template>
  <Swiper-container class="mySwiper demo-2-container"
                    thumbs-swiper=".mySwiper2"
                    loop="true"
                    space-between="10"
                    navigation="true"
                    style="width:500px;
                           --swiper-navigation-color: #fff;
                           --swiper-pagination-color: #fff" >
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
    </swiper-slide>
  </Swiper-container>
  <Swiper-container class="mySwiper2 demo-2-container2"
                    loop="true"
                    space-between="10"
                    slides-per-view="4"
                    free-mode="true"
                    watch-slides-progress="true"
                    style="width:500px;">
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </swiper-slide>
    <swiper-slide class="demo-2-slide">
      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
    </swiper-slide>
  </Swiper-container>
</template>

<script setup>

</script>

<style lang='scss' scope>
// html,
//     body {
//       position: relative;
//       height: 100%;
//     }

//     body {
//       background: #eee;
//       font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//       font-size: 14px;
//       color: #000;
//       margin: 0;
//       padding: 0;
//     }

    Swiper-container {
      width: 100%;
      height: 100%;
    }

    .demo-2-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .demo-2-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // body {
    //   background: #000;
    //   color: #000;
    // }

    Swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }

    .demo-2-slide {
      background-size: cover;
      background-position: center;
    }

    .demo-2-container {
      height: 80%;
      width: 100%;
    }

    .demo-2-container2 {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }

    .demo-2-container2 .demo-2-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }

    .demo-2-container2 .swiper-slide-thumb-active {
      opacity: 1;
    }

    .demo-2-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>
