import { reactive, refs, toRefs, onMounted, onUnmounted } from 'vue' // eslint-disable-line

export function useScrollingParallax () {
  const refsData = reactive({})
  const states = reactive({
    data: [],
    curPostion: 0
  })
  const { data } = toRefs(states)

  onMounted(async () => {
    await createData()

    getItemPosition()

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
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non quibusdam sed molestias, quisquam reprehenderit quidem vitae voluptate deserunt reiciendis nihil officiis asperiores animi porro architecto ad, repellendus minima cupiditate',
          id: crypto.randomUUID()
        })
      }
      resolve()
    })
  }
  function getItemPosition () {
    // console.log(data)
    data.value.forEach((item, idx) => {
      const el = refsData[`item-${idx + 1}`]
      // console.log(el)
      // console.log(el.getBoundingClientRect())
      item.bottom = el.getBoundingClientRect().bottom
    })
  }
  function getCurPosition (e) {
    console.log(e)
  }

  return {
    ...toRefs(states),
    refsData,
    getCurPosition
  }
}
