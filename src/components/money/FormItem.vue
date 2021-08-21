<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName}}</span>
      <template v-if="type==='date'">
        <input
            :type="type || 'text'"
            :value="x(value)"
            @click="$emit('update:isShow',false)"
            @blur="$emit('update:isShow',true)"
            @change="onValueChange($event.target.value)"
            :placeholder="this.placeholder">
      </template>
      <template v-else>
        <input
            :type="type || 'text'"
            :value="value"
            @click="$emit('update:isShow',false)"
            @blur="$emit('update:isShow',true)"
            @change="onValueChange($event.target.value)"
            :placeholder="this.placeholder">
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import dayjs from 'dayjs';

@Component
export default class FormItem extends Vue {
  @Prop({required:true,type:String}) fieldName !:string
  @Prop(String) placeholder?:string
  @Prop({default:''}) readonly value!:string
  @Prop(String)type?:string
  onValueChange(value: string) {
    this.$emit('update:value', value);
  }

  x(isoString:string){
    return  dayjs(isoString).format('YYYY-MM-DD')
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
    padding-top: 1.5px;
  }
  input{
    height: 40px;
    flex-grow: 1;
    background:transparent ;
    border: none;
  }
}
</style>