<template>
  <div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="tags">
      <ul>
        <li>餐饮</li>
        <li>购物</li>
        <li>居住</li>
        <li>交通</li>
        <li>新增</li>
      </ul>
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
</style>