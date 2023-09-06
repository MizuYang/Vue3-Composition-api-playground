<template>
  <div class="me-0 px-0 p-3"
       @scroll="getCurPosition"
       style="height:100vh;overflowY:scroll;margin-left:30.5px;padding-top:110px;">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">Swiper</h2>
    </header>

    <template v-for="(item,idx) in data" :key="`scrollParallax-${item.id}`">
      <section class="my-5 mb-3 p-3 pb-0"
                :ref="(el) => refsData[`item-${idx+1}`] = el">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </section>
    </template>

    <div class="position-fixed end-0 m-5" style="bottom:70px;">
      <p class="bg-gray txt-20 p-1 px-2">{{ curPostion }}</p>
    </div>
  </div>
</template>

<script setup>
import { useScrollingParallax } from '@/composables/scrollingParallax/useScrollingParallax.js'

const { data, curPostion, refsData, getCurPosition } = useScrollingParallax()

// import { reactive, refs, toRefs, onMounted, nextTick } from 'vue' // eslint-disable-line

// const refsData = reactive({})
// const states = reactive({
//   data: [],
//   curPostion: 0
// })
// const { data, curPostion } = toRefs(states)

// onMounted(async () => {
//   await createData()

//   getItemPosition()
// })

// function createData () {
//   return new Promise((resolve, reject) => {
//     for (let i = 1; i <= 100; i++) {
//       data.value.push({
//         title: `標題 ${i}`,
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non quibusdam sed molestias, quisquam reprehenderit quidem vitae voluptate deserunt reiciendis nihil officiis asperiores animi porro architecto ad, repellendus minima cupiditate',
//         id: crypto.randomUUID()
//       })
//     }
//     resolve()
//   })
// }
// function getItemPosition () {
//   console.log(data)
//   data.value.forEach((item, idx) => {
//     const el = refsData[`item-${idx + 1}`]
//     console.log(el)
//     console.log(el.getBoundingClientRect())
//     item.bottom = el.getBoundingClientRect().bottom
//   })
// }
// function getCurPosition () {

// }
</script>

<style lang='scss' scope>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
