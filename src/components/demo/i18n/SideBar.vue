<template>
  <div class="list-group">
    <a href="javascript:;"
       class="list-group-item list-group-item-action">
       {{ $t('Home') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-primary">
       {{ $t('LatestNews') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-secondary">
       {{ $t('ProductCatalog') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-success">
       {{ $t('AboutUs') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-danger">
       {{ $t('ContactUs') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-warning">
       {{ $t('FAQs') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-info">
       {{ $t('CustomerReviews') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-light">
       {{ $t('CustomerSupport') }}
    </a>
    <a href="javascript:;"
       class="list-group-item list-group-item-action list-group-item-dark">
       {{ $t('OnlineOrders') }}
    </a>
  </div>
</template>

<script setup>
</script>

<style lang='scss' scope>
[data-theme="dark"] {
 .list-group {
  background-color: gray;
 }

}

</style>
