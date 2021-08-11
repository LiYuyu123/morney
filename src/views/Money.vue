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
        <input type="text">
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
        <button>OK</button>
        <button>.</button>
        <button>0</button>
      </div>
    </div>
    <hr>
    <router-link to="/labels" class="cancel">取消</router-link>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Money',
}
</script>

<style lang="scss" scoped>
.cancel {
  border: 1px solid black;
}
.types {
  border: 1px solid red;
}
.tags {
  border: 1px solid blue;
  padding-left: 41.5px;
   >.content {
     margin-right: -35px;
     > .current {
       display: flex;
       flex-wrap: wrap;
       > li {
         margin-right: 35px;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         margin-bottom: 25px;
         > .icon {
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