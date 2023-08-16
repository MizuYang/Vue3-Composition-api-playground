<template>
  <section class="mt-3">
    <h3>子元件 1</h3>
  </section>

  <section class="position-relative">
    <div class="position-absolute start-0" id="C">C區域</div>
    <div class="position-absolute end-0" id="D">D區域</div>
  </section>

</template>

<script setup>

</script>

<style lang='scss'>
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
  color: #000;
  line-height: 100px;
}
</style>
