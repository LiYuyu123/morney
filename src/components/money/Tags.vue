<template>
  <div class="tags">
    <ul class="current">
      <li>
        <Icon name="food"></Icon>
        <span>餐饮</span>
      </li>
      <li>
        <Icon name="shopping"></Icon>
        <span>购物</span>
      </li>
      <li>
        <Icon name="live"></Icon>
        <span>居住</span>
      </li>
      <li>
        <Icon name="traffic"></Icon>
        <span>交通</span>
      </li>
      </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'tags'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
@media (min-width: 500px) {
  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 966.7px;
    margin-left: auto;
    margin-right: auto;
  }
}
.tags {
  display: flex;
  justify-content: center;
  align-items: center;

  .current {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 40.8px;
    }

    .icon {
      background: rgb(245, 245, 245);
      border-radius: 50%;
      width: 56px;
      height: 56px;
    }
  }
}
</style>