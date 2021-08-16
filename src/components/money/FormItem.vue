<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input v-model.trim="value" type="text" :placeholder="`${this.placeholder}`">
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
  value:string=''
  @Watch('value')
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