<template>
  <section class="mt-3">
    <h3>子元件 2</h3>
  </section>

  <section class="position-relative">
    <div class="position-absolute start-0" id="E">E區域</div>
    <div class="position-absolute end-0" id="F">F區域</div>
  </section>

</template>

<script setup>

</script>

<style lang='scss'>
.box {
  width: 100px;
  height: 100px;
  color: #fff;
  line-height: 100px;
}
[data-theme="light"].box {
  background-color: rgb(172, 158, 239);
}
[data-theme="dark"].box {
  background-color: rgb(41, 3, 193);
}
</style>
