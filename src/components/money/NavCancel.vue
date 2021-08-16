<template>
  <div class="navCancel">
      <Icon  class="cancel" name="cancel" @click="goBack"></Icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class navCancel extends Vue{
goBack(){
  this.$router.back()
}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.navCancel{
  @extend %outerShadow;
  display: flex;
  justify-content:center ;
  align-items: center;
    .cancel{
      width: 54px;
      height: 54px;
    }
  }
</style>