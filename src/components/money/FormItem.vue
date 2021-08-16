<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName}}</span>
      <input
          :value="value"
          @input="onValueChange($event.target.value)"
          type="text" :placeholder="`${placeholder}`">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class FormItem extends Vue {
  @Prop({required:true,type:String}) fieldName !:string
  @Prop(String) placeholder?:string
  @Prop({default:''}) readonly value!:string
  onValueChange(value:string){
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.formItem{
  padding-left: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  .name{
    padding-right: 16px;
  }
  input{
    height: 40px;
    flex-grow: 1;
    background:transparent ;
    border: none;
  }
}
</style>