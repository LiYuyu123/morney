<template>
  <div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="tags">
      <div class="content">
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
        <li>
          <Icon name="add"></Icon>
          <span>新增</span>
        </li>
      </ul>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="写点备注吧">
      </label>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button>.</button>
        <button class="zero">0</button>
      </div>
    </div>
    <div class="nav">
    <router-link to="/labels" class="cancel" >
      <Icon name="cancel"></Icon>
      取消
    </router-link>
     </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Money',
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.nav {
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
.numberPad{
  .output{
    @extend %clearfix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons{
    @extend %clearfix;
    button{
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok{
        height: 64*2px;
        float: right;
      }
      &.zero{
        width: 25*2%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }
      &:nth-child(14) {
        background: darken($bg, 4*5%);
      }
      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }
    }
  }
}
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
.notes{
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name{
   padding-right: 16px;
  }
  input{
    height: 64px;
    flex-grow: 1;
    background:transparent ;
    border: none;
  }
}
.tags {
  padding-left: 41.5px;
   >.content {
     margin-right: -35px;
     flex-grow: 1;
     > .current {
       display: flex;
       flex-wrap: wrap;
       > li {
         margin-right: 35px;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         margin-top: 20px;
         margin-bottom: 15px;
         font-size: 14px;
          >.icon {
           background:rgb(245, 245, 245);
           border-radius: 50%;
           width: 56px;
           height: 56px;
         }
       }
     }
   }
}
</style>