<template>
  <Layout>
    <div class="head">
       <div>明细</div>
    </div>
   <ol class="tags">
     <li>
       <span>吃饭</span>
       <Icon name="right" />
     </li>
     <li>
       <span>睡觉</span>
       <Icon name="right" />
     </li>
     <li>
       <span>打游戏</span>
       <Icon name="right" />
     </li>
     <li>
       <span>喝酒</span>
       <Icon name="right" />
     </li>
   </ol>
   <div class="createTag-wrapper">
     <button class="createTag">新增标签</button>
   </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Labels'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.head{
  @extend %outerShadow;
  background: #c4c4c4;
  div{
    height: 50px;
     display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
  }
}
.tags{
  background: white;
  font-size: 16px;
  padding-left:16px ;
  li{
   min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag{
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>