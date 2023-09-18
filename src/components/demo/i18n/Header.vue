<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="javascript:;">{{ $t('NavbarBrand') }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="javascript:;">{{ $t('Home')}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">{{ $t('Link') }}</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ $t('Dropdown') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="javascript:;">{{ $t('Action') }}</a></li>
              <li><a class="dropdown-item" href="javascript:;">{{ $t('Anotheraction') }}</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="javascript:;">{{ $t('Somethingelsehere') }}</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">{{ $t('Disabled') }}</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control search-input me-2" type="search"
                 :placeholder="$t('Content')" aria-label="Search">
          <button class="btn btn-outline-success search-btn" type="submit" style="min-width:100px;">{{ $t('Search') }}</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang='scss' scope>
[data-theme="dark"] {
 .navbar {
  background-color: gray;
 }
 .search-btn {
  color: #fff;
  border: 1px solid #fff;
  background-color: #6a6161;
 }
 .search-input {
   background-color: #6a6161;
 }
}
[data-theme="light"] {
 .navbar {
  background-color: #fff;
 }
}
</style>
