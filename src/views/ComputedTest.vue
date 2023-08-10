<template>
  <div class="container d-flex flex-column my-3 px-0 py-3">
    <!-- Computed 排序 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">1. computed 排序data</h2>
      <button type="button" class="btn btn-sm btn-primary btn-secondary me-1 mb-1 p-1" @click="getRandomNum">產生隨機數字</button>
      <button type="button" class="btn btn-sm btn-primary btn-secondary mb-1 p-1" @click="sortReverse">反轉</button>
      <p class="my-2" :data-theme="themeStore.theme"><code>{{ sortData }}</code></p>
      <pre class="bg-dark text-light p-2">
const data = ref([])
const isSortReverse = ref(false)
const sortData = computed(() => data.value.sort((a, b) => isSortReverse.value ? a - b : b - a))</pre>
    </section>

    <!-- Computed get(), set() -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">
        2. computed <code>get()</code>、<code>set()</code>
      </h2>
      <button type="button" class="btn btn-sm btn-primary btn-secondary me-1 mb-1 p-1" @click="getRandomDiscount">產生隨機折扣</button>
      <p class="my-1" :data-theme="themeStore.theme">
        原價: "<code>{{ price }}</code>"元 <br />
        折扣: "<code>{{ discount }}</code>" <br />
        折扣後價格: "<code>{{ discountPrice }}</code>"
      </p>
      <pre class="bg-dark text-light p-2">
const discount = ref(Math.random().toFixed(2))
const price = ref(100)
const discountPrice = computed({
  get () {
    return price.value * discount.value
  },
  set (newDiscount) {
    discount.value = newDiscount
  }
})
function getRandomDiscount () {
  discountPrice.value = Math.random().toFixed(2)
}</pre>
    </section>

    <!-- Computed 排序 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">
        3. computed 表單驗證樣式
      </h2>

      <label for="emailInput" class="form-label my-2" :data-theme="themeStore.theme">
        請輸入信箱
        <input type="text" id="emailInput"
               class="form-control mt-1"
               :class="emailValidateStyle"
               v-model="email"
               placeholder="ex: xxx@gmail.com">
      </label>

      <p class="mt-1 mb-2" :data-theme="themeStore.theme">
        信箱: "<code>{{ email }}</code>"
      </p>

      <pre class="bg-dark text-light p-2">
const email = ref('')
const rex = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
const emailValidateStyle = computed(() => {
  if (!email.value) return 'border-default'

  const isMailFormatSuccess = rex.test(email.value)
  return isMailFormatSuccess ? 'validate-success' : 'validate-fail'
})</pre>
    </section>
  </div>

</template>

<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
export default {
  setup () {
    const store = useStore()
    const themeStore = store.state.theme

    // part 1
    const data = ref([])
    const isSortReverse = ref(false)
    getRandomNum()
    const sortData = computed(() => data.value.sort((a, b) => isSortReverse.value ? a - b : b - a)) // eslint-disable-line

    // part 2
    const discount = ref(Math.random().toFixed(2))
    const price = ref(100)
    const discountPrice = computed({
      get () {
        return (price.value * discount.value).toFixed(0)
      },
      set (newDiscount) {
        discount.value = newDiscount
      }
    })

    // part 3
    const email = ref('')
    const rex = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
    const emailValidateStyle = computed(() => {
      if (!email.value) return 'border-default'

      const isMailFormatSuccess = rex.test(email.value)
      return isMailFormatSuccess ? 'validate-success' : 'validate-fail'
    })

    function sortReverse () {
      isSortReverse.value = !isSortReverse.value
    }
    function getRandomNum () {
      const newData = []
      for (let num = 1; num < 8; num++) {
        const randomNum = Math.round(Math.random() * 99 + 1)
        newData.push(randomNum)
      }
      data.value = newData
    }
    function getRandomDiscount () {
      discountPrice.value = Math.random().toFixed(2)
    }

    return {
      themeStore,
      sortData,
      discount,
      price,
      discountPrice,
      email,
      emailValidateStyle,
      sortReverse,
      getRandomNum,
      getRandomDiscount
    }
  }

}
</script>

<style lang='scss' scope>
.border-default {
  transition: border .5s;
  border: 5px solid gray;
  &:focus {
    border: 5px solid gray;
  }
}
.validate-fail {
  transition: border .5s;
  border: 5px solid red;
  &:focus {
    border: 5px solid red;
  }
}
.validate-success {
  transition: border .5s;
  border: 5px solid green;
  &:focus {
    border: 5px solid green;
  }
}
</style>
