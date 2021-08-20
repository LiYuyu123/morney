<template>
  <div class="layout-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';



export default class Layout extends Vue {

}

</script>
<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>