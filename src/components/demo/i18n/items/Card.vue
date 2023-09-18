<template>
  <div class="card border-none">
    <img src='https://picsum.photos/400/152' class="img-fluid card-img-top" alt=''>
    <div class="card-body px-0 pb-0">
      <h5 class="card-title p-1">{{ $t('CardTitle') }}</h5>
      <p class="card-text p-1">{{ $t('CardContent') }}</p>
      <a href="javascript:;" class="btn btn-primary w-100 py-2">{{ $t('Button') }}</a>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang='scss' scope>
[data-theme="dark"] {

  .card-body {
    color: #000;
    background-color: gray;
  }
}
</style>
