<template>
   <template v-if="status"><span class="text-success text-20 ms-5">{{ status }}</span></template>

  <button @click="isShow=!isShow">{{ isShow?'隱藏':'顯示' }}</button>
  <!-- <transition name="moveLeft">
    <template v-if="isShow">
      <div class="box"></div>
    </template>
  </transition> -->

  <transition name="move" appear>
    <div class="box" v-show="isShow">往右出現，往左消失</div>
  </transition>
  <!-- <div class="box animate-move-y">上下晃</div> -->
  <div class="box animate-move-rect">繞正方形</div>

</template>

<script>
export default {

  data () {
    return {
      isLoading: false,
      isShow: false
    }
  },

  // methods: {
  //   toggle () {
  //     this.isShow = !this.isShow
  //   }
  // },

  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(300px, 200px);
}

.moveLeft-enter-active,
.moveLeft-leave-active {
  transition: transform 1s linear;
}
.moveLeft-enter-from,
.moveLeft-leave-to {
  transform: translate(10px, 100px);
}
.moveLeft-enter-to,
.moveLeft-leave-from {
  transform: translate(300px, 100px);
}

// .moveLeft-

// 左右晃
// .animate-move-x {
//   animation: animate-move-x 2s linear infinite;
// }

.move-enter-active {
  animation: animate-move-x 1s;
}
.move-leave-active {
  animation: animate-move-x 1s reverse;
}
@keyframes animate-move-x {
  from {
    transform: translate(-100%, 200px);
  }
  to {
    transform: translate(300px, 200px);
  }
}
// @keyframes animate-move-x {
//   0% {
//     transform: translate(0px, 300px);
//   }
//   50% {
//     transform: translate(300px, 300px);
//   }
//   100% {
//     transform: translate(0px, 300px);
//   }
// }

// 上下晃
.animate-move-y {
  animation: animate-move-y 2s linear infinite;
}
// @keyframes animate-move-y {
//   0% {
//     transform: translate(0px, 300px);
//   }
//   50% {
//     transform: translate(0px, 500px);
//   }
//   100% {
//     transform: translate(0px, 300px);
//   }
// }
// 繞圈
.animate-move-rect {
  animation: animate-move-rect 2s linear infinite;
}
@keyframes animate-move-rect {
  0% {
    transform: translate(0px, 300px);
  }
  25% {
    transform: translate(300px, 300px);
  }
  50% {
    transform: translate(300px, 500px);
  }
  75% {
    transform: translate(0px, 500px);
  }
  100% {
    transform: translate(0px, 300px);
  }
}
</style>
