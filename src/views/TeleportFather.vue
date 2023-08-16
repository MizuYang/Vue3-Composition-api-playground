<template>
  <div class="container d-flex flex-column mt-3 px-0 pt-3" :data-theme="theme">
    <section class="my-3 px-3">
       <h2 class="text-20">Teleport 傳送</h2>
    </section>

    <section class="ms-3 my-1 px-3" style="padding-bottom:130px;"
             :style="`background-color:${theme==='light'?'#d5d5d5':'#202224'};`">
      <h3 class="py-2">父層</h3>

      <div class="position-relative">
        <div class="position-absolute start-0" id="A">A區域</div>
        <div class="position-absolute end-0" id="B">B區域</div>
      </div>
    </section>

    <section class="ms-3 my-1 px-3" style="padding-bottom:130px;"
             :style="`background-color:${theme==='light'?'#d5d5d5':'#202224'};`">
      <TeleportChild />
    </section>

    <section class="ms-3 my-1 px-3" style="padding-bottom:130px;"
             :style="`background-color:${theme==='light'?'#d5d5d5':'#202224'};`">
      <TeleportChild2 />
    </section>

    <!-- 切換 teleport 按鈕 -->
    <ul class="ms-3 my-1">
      <li class="my-2">
        <button type="button" class="btn btn-sm btn-secondary me-1 p-1"
                @click="changTeleportPosition('#A')">
                傳到父層 A
        </button>
        <button type="button" class="btn btn-sm btn-secondary me-1 p-1"
                @click="changTeleportPosition('#B')">
                傳到父層 B
        </button>
      </li>
      <li class="my-2">
        <button type="button" class="btn btn-sm btn-secondary me-1 p-1"
                @click="changTeleportPosition('#C')">
                傳到子層1 C
        </button>
        <button type="button" class="btn btn-sm btn-secondary me-1 p-1"
                @click="changTeleportPosition('#D')">
                傳到子層1 D
        </button>
      </li>
      <li class="my-2">
        <button type="button" class="btn btn-sm btn-secondary me-1 p-1"
                @click="changTeleportPosition('#E')">
                傳到子層2 E
        </button>
        <button type="button" class="btn btn-sm btn-secondary me-1 p-1"
                @click="changTeleportPosition('#F')">
                傳到子層2 F
        </button>
      </li>
      <li class="my-2">
        <button type="button" class="btn btn-sm btn-secondary me-1 p-1"
                @click="changTeleportPosition('body')">
                傳到 <code class="text-light">{{ bodyStr }}</code>
        </button>
      </li>
    </ul>

    <!-- teleport -->
    <teleport :to="teleportPosition">
      <div class="box" :data-theme="theme">子元件的元素</div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import TeleportChild from '@/components/teleport/TeleportChild.vue'
import TeleportChild2 from '@/components/teleport/TeleportChild2.vue'

const store = useStore()
const themeStore = store.state.theme
const { theme } = toRefs(themeStore)

const bodyStr = '<body>'
const teleportPosition = ref('body')

function changTeleportPosition (el) {
  teleportPosition.value = el
}
</script>

<style lang='scss'>

</style>
