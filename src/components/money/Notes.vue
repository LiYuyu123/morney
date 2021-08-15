<template>
  <div>
    <label class="notes">
      <span class="name">{{fieldName}}</span>
      <input v-model.trim="value" type="text" :placeholder="`${placeholder}`">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Notes extends Vue {
  @Prop({required:true,type:String}) fieldName !:string
  @Prop(String) placeholder?:string
  value:string=''
  @Watch('value')
  onValueChange(value:string){
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
</style>