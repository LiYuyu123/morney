<template>
  <div >
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  background: #f5f5f5;
  @media(min-width: 500px) {
    width: 500px;
    margin: 0 auto;
  }
}
</style>
