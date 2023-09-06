import { reactive, ref, toRefs, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

//* 滾動視差初始化
AOS.init({ })

export function useAos () {
  const states = reactive({
    data: [],
    curPostion: 0,
    prePosition: 0,
    scrollWrap: ref(null)
  })
  const { data } = toRefs(states)

  onMounted(async () => {
    await createData()
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

  return {
    createData,
    ...toRefs(states)
  }
}
