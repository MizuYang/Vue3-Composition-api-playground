<template>
  <div class="container area my-3 px-0 p-3">

    <header>
      <h2 class="text-20 p-3 pb-0">i18n 多國語系</h2>
    </header>

    <!-- 語系設定 -->
    <section>
      <h3 class="text-18 p-3 pb-0">{{ $t(locale) }}( {{ locale }} )</h3>
      <ul class="d-flex px-3 pt-2">
        <li class="me-1" v-for="btn in lang" :key="btn.name">
          <button type="button"
                  class="btn p-1 px-2"
                  :class="btn.name===locale?'btn-primary':'btn-secondary'"
                  @click="changeLanguage(btn.name)">
            {{ $t(btn.name) }}
          </button>
        </li>
      </ul>
    </section>

    <main class="area m-3 p-3">
      <header>
        <Header />
      </header>
      <div class="d-flex">
        <nav>
          <SideBar class="bg-fff"
                   style="width:150px;height:100%;" />
        </nav>
        <main class="container p-3">
          <Main />
        </main>
      </div>

    </main>
  </div>
</template>

<script setup>
import Header from '@/components/demo/i18n/Header.vue'
import SideBar from '@/components/demo/i18n/SideBar.vue'
import Main from '@/components/demo/i18n/Main.vue'
import { useMyI18n } from '@/composables/i18n/useMyI18n.js'

const { lang, locale, changeLanguage } = useMyI18n()

</script>

<style lang='scss' scope>

</style>
