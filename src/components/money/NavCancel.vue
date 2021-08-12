<template>
  <div class="navCancel">
    <router-link to="/labels" class="cancel" >
      <Icon name="cancel"></Icon>
      取消
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavCancel'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.navCancel{
  @extend %outerShadow;
  display: flex;
  justify-content:center ;
  align-items: center;
  >.cancel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon{
      width: 32px;
      height: 32px;
    }
  }
}
</style>