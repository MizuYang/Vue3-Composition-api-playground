<template>
  <div class="container px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">骨架屏</h2>
    </header>

    <section class="area m-3 p-3" style="width:500px;">
      <FacebookLoader />
    </section>

    <section class="area m-3 p-3" style="width:500px;">
      <BulletListLoader />
    </section>

    <section class="area m-3 p-3" style="width:500px;">
      <ContentLoader />
    </section>

    <section class="area m-3 p-3" style="width:500px;">
      <InstagramLoader />
    </section>
  </div>
</template>

<script setup>
import FacebookLoader from '@/components/demo/contentLoader/FacebookLoader.vue'
import BulletListLoader from '@/components/demo/contentLoader/BulletListLoader.vue'
import InstagramLoader from '@/components/demo/contentLoader/InstagramLoader.vue'
import ContentLoader from '@/components/demo/contentLoader/ContentLoader.vue'

// 更多其他人分享的模板
// https://skeletonreact.com/
</script>

<style lang='scss' scope>

</style>
