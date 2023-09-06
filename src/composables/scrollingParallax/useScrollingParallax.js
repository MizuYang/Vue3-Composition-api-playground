import { reactive, ref, toRefs, onMounted, onUnmounted } from 'vue'
import throttle from 'lodash/throttle.js'

export function useScrollingParallax () {
  const refsData = reactive({})
  const states = reactive({
    data: [],
    curPostion: 0,
    prePosition: 0,
    scrollWrap: ref(null)
  })
  const { data, scrollWrap, curPostion, prePosition } = toRefs(states)

  onMounted(async () => {
    await createData()

    getItemPosition()
    getCurPosition()

    document.body.classList.add('hide-scrollbar')
  })
  onUnmounted(() => {
    document.body.classList.remove('hide-scrollbar')
  })

  function createData () {
    return new Promise((resolve, reject) => {
      for (let i = 1; i <= 100; i++) {
        data.value.push({
          title: `標題 ${i}`,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non quibusdam sed molestias, quisquam reprehenderit quidem vitae voluptate deserunt reiciendis nihil officiis asperiores animi porro architecto ad, repellendus minima cupiditate lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non quibusdam sed molestias, quisquam reprehenderit quidem vitae voluptate deserunt reiciendis nihil officiis asperiores animi porro architecto ad, repellendus minima cupiditate lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non quibusdam sed molestias, quisquam reprehenderit quidem vitae voluptate deserunt reiciendis nihil officiis asperiores animi porro architecto ad, repellendus minima cupiditate lorem',
          id: crypto.randomUUID(),
          isShow: {
            h2: false,
            p: false
          }
        })
      }
      resolve()
    })
  }
  function getItemPosition () {
    data.value.forEach((item, idx) => {
      const el = refsData[`item-${idx + 1}`]
      const [h2, p] = el.childNodes
      const h2Bottom = Math.floor(h2.getBoundingClientRect().bottom)
      const pBottom = Math.floor(p.getBoundingClientRect().bottom)
      item.h2Bottom = h2Bottom
      item.pBottom = pBottom
      item.bottom = Math.floor(el.getBoundingClientRect().bottom)
    })
  }
  const getCurPosition = throttle(() => {
    const screenHeight = document.body.offsetHeight
    curPostion.value = scrollWrap.value.scrollTop + screenHeight
    checkItemShow()
  }, 300)
  function checkItemShow () {
    const curPosition = curPostion.value
    const isScrollTop = prePosition.value > curPosition
    data.value.forEach((item, idx) => {
      if (curPosition + 150 >= item.h2Bottom) {
        item.isShow.h2 = true
      }
      if (curPosition - 30 <= item.h2Bottom && isScrollTop) {
        item.isShow.h2 = false
      }
      if (curPosition + 150 >= item.pBottom) {
        item.isShow.p = true
      }
      if (curPosition <= item.pBottom && isScrollTop) {
        item.isShow.p = false
      }
      prePosition.value = curPosition
    })
  }

  return {
    ...toRefs(states),
    refsData,
    getCurPosition
  }
}
// animate__backInRight
